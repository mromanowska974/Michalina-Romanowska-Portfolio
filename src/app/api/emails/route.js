import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

async function sendEmail(data) {
    console.log('Sending email with data:', data);
    return await transporter.sendMail({
        from: data.email,
        to: process.env.SMTP_TO,
        subject: `${data.fullName} - wiadomość w sprawie możliwej współpracy`,
        text: data.message,
        replyTo: data.email,
    });
}

export async function POST(data) {
    const parsedData = await data.json();
    const messageData = {
        fullName: parsedData.fullName,
        email: parsedData.email,
        message: parsedData.message
    }

    try {
        await sendEmail(messageData);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
    }
}