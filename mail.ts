import nodemailer from 'nodemailer'

async function sendMail(sender:string, to:string, subject:string, text:string, html?:string, attachments?:any) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.emailemnuvem.com.br',
        port: 465,
        secure: true,
        auth: {
            user: 'x',
            pass: 'x'
        }
    });

    let mailOptions = {
        from: sender + " <tecnologia@onfinity.com.br>",
        to: to,
        subject: subject,
        html: html,
        text: text,
        attachments: attachments
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    
    if(info?.messageId){
        return true;
    }

    return false;
}

export { sendMail }