import { Request, Response } from "express";
import sendGrid from "@sendgrid/mail";
import dotenv from "dotenv";


dotenv.config();

sendGrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async (Location: string) => {
    try {
        await sendGrid.send({
            to: 'olegcigulev@gmail.com',
            from: 'miha1488plet@gmail.com',
            subject: 'Task: practice One',
            text: Location
        });
    } catch (err) {
        console.error('sendEmail: ', err);
        return { error: new Error('Image not send') };
    }
}
