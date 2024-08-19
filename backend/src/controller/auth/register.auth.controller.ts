import {RequestHandler} from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { findUserbyEmail } from '../../services/users/user.services';
import prisma from '../../utils/db';
import taransporter from '../../utils/mailservice';

dotenv.config();

interface RegisterUser{
    email: string;
    password : string;
}


export const registerUser : RequestHandler<{}, {}, RegisterUser>  = async(req, res)=>{
    
    const { email, password } = req.body;
    const checkUser = await findUserbyEmail(email);
    if(checkUser) {
       return res.
       status(400)
       .json({message:'there is a user existed with this email'});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await prisma.user.create({
        data:{
            email:email,
            password : hashedPassword
        }
    })
    

        taransporter.sendMail(
        {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "your credential for login to Techtogether-blog",
            text: `your email is:    ${email}  and 
            your password is :  ${password}`,
        },
        (error, info) => {
            if (error) {
              console.error("Error sending email: ", error);
            } else {
              console.log("Email sent: ", info.response);
            }
          });



    res.status(202)
    .json({message: 'user created succesfully !'})
}