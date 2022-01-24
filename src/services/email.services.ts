import { Request, Response } from "express";
const sendGrid = require('@sendgrid/mail');
require('dotenv').config();
sendGrid.setApiKey(process.env.SENDGRID_API_KEY)
const emailMessage = {
    to: 'email.com',
    from: 'egmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<h1>Hello</h1>
    <p>This message was created with SendGrid</p>`
}
const sendEmail = async (req: Request, res: Response) => {
    try {
        await sendGrid.send(emailMessage);
        res.status(200).send({ message: 'Message was send' });

    } catch (err) {
        console.error('sendEmail: ', err);
        return res.status(400).json({ message: err });
    }
}

module.exports = {
    sendEmail
}