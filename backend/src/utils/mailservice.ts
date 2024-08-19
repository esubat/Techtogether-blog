import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()

const password = process.env.EMAIL_PASSWORD;
const  HOST = process.env.EMAIL_HOST;
const SERVICE = process.env.EMAIL_SERVICE;
const PORT = process.env.SMTP_PORT;
const SECURE = process.env.SECURE_PORT;
const USER = process.env.EMAIL_USER;

const taransporter = nodemailer.createTransport({
    service:SERVICE,
    host: HOST,
    port:Number(PORT),
    secure: Boolean(SECURE),
    auth: { 
        user: String(USER), 
        pass: password 
    }
});

export default taransporter;