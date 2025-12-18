import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EnquireTemplate } from '../../../../src/Components/emails/EnquireTemplate';

// 1. Force dynamic rendering to prevent static caching issues on Hostinger
export const dynamic = 'force-dynamic';

// 2. Enforce Node.js runtime (Resend doesn't support Edge on some platforms)
export const runtime = 'nodejs';

export async function POST(request) {
    try {
        // 3. Log key visibility for debugging (masked)
        const key = process.env.RESEND_API_KEY;
        console.log('📝 Contact API called');
        console.log('🔑 RESEND KEY:', key ? `Starts with ${key.substring(0, 3)}...` : 'UNDEFINED');

        if (!key) {
            return NextResponse.json({
                success: false,
                error: 'Server configuration error: Missing RESEND_API_KEY'
            }, { status: 500 });
        }

        const resend = new Resend(key);

        const body = await request.json();
        const { name, email, phone, message } = body;

        console.log(`📩 Processing inquiry from: ${email}`);

        const emailHtml = EnquireTemplate({
            name,
            email,
            phone,
            message
        });

        const recipient = process.env.CONTACT_EMAIL || 'info@blaupunkt-ev.com';

        const data = await resend.emails.send({
            from: 'Blaupunkt Website <onboarding@resend.dev>', // Update to specific domain if/when verified
            to: [recipient],
            subject: `New Contact Form Submission from ${name}`,
            html: emailHtml
        });

        if (data.error) {
            console.error('❌ Resend API Error:', data.error);
            return NextResponse.json({ success: false, error: data.error.message }, { status: 500 });
        }

        console.log('✅ Email sent successfully:', data.id);
        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('❌ Internal Server Error:', error);
        return NextResponse.json({ success: false, error: 'Email failed: ' + error.message }, { status: 500 });
    }
}
