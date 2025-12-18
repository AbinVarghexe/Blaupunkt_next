import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EnquireTemplate } from '../../../../src/components/emails/EnquireTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        const emailHtml = EnquireTemplate({
            name,
            email,
            phone,
            message
        });

        const data = await resend.emails.send({
            from: 'Blaupunkt Website <onboarding@resend.dev>', // Update this with verified domain later
            to: [process.env.CONTACT_EMAIL || 'info@blaupunkt-ev.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: emailHtml
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
