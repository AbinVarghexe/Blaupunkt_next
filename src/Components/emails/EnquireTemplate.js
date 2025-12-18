/**
 * Generates the HTML string for the Enquire Email.
 * @param {Object} props - The email properties.
 * @param {string} props.name - The sender's name.
 * @param {string} props.email - The sender's email.
 * @param {string} props.phone - The sender's phone.
 * @param {string} props.message - The sender's message.
 * @returns {string} The HTML string.
 */
export const EnquireTemplate = ({ name, email, phone, message }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Website Inquiry</title>
      </head>
      <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #199BD3; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 24px; font-weight: 600; margin: 0;">New Website Inquiry</h1>
          </div>
          <div style="padding: 30px 20px; color: #18161A;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hello,</p>
            <p>You have received a new inquiry from the Blaupunkt website contact form. Here are the details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tbody>
                <tr>
                  <th style="text-align: left; padding: 12px 8px; border-bottom: 1px solid #e0e0e0; color: #909294; font-size: 14px; width: 30%;">Name</th>
                  <td style="text-align: left; padding: 12px 8px; border-bottom: 1px solid #e0e0e0; font-size: 16px; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <th style="text-align: left; padding: 12px 8px; border-bottom: 1px solid #e0e0e0; color: #909294; font-size: 14px; width: 30%;">Email</th>
                  <td style="text-align: left; padding: 12px 8px; border-bottom: 1px solid #e0e0e0; font-size: 16px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: #199BD3; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <th style="text-align: left; padding: 12px 8px; border-bottom: 1px solid #e0e0e0; color: #909294; font-size: 14px; width: 30%;">Phone</th>
                  <td style="text-align: left; padding: 12px 8px; border-bottom: 1px solid #e0e0e0; font-size: 16px; font-weight: 500;">${phone}</td>
                </tr>
              </tbody>
            </table>
    
            <div>
              <span style="color: #909294; font-size: 14px; margin-bottom: 8px; display: block;">Message:</span>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; font-size: 16px; line-height: 1.5; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #909294; font-size: 12px; margin: 0;">
              This email was sent from the Blaupunkt EV website contact form.
            </p>
            <p style="color: #909294; font-size: 12px; margin: 0;">
              &copy; ${new Date().getFullYear()} Blaupunkt. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};
