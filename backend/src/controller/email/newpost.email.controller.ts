import Queue from "bull";
import nodemailer from "nodemailer";
import Subscribers from "../../services/users/fetchsubscribers";
import dotenv from "dotenv";
import taransporter from "../../utils/mailservice";

dotenv.config();

const emailQueue = new Queue("emails");

interface EmailData {
    subject : string;
    text : string;
}
async function SendPostToSubscribers(data:EmailData){

    const { subject, text} = data;
    const subscribers = await Subscribers();
    console.log(subscribers);

    const emails = subscribers.map((subscriber) => subscriber.email)
    const info = await taransporter.sendMail({
        from : process.env.EMAIL_USER,
        to : emails,
        subject : subject,
        text : text,
    });

    console.log(info.messageId);
    console.log(info.accepted);
}

export default SendPostToSubscribers;



