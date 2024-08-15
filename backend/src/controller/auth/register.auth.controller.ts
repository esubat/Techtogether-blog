import {RequestHandler} from 'express';
import bcrypt from 'bcrypt';
import { findUserbyEmail } from '../../services/users/user.services';
import prisma from '../../utils/db';

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

    res.status(202)
    .json({message: 'user created succesfully !'})
}