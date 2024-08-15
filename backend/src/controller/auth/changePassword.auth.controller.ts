import {Request,Response} from 'express';
import bcrypt from 'bcrypt'
import prisma from '../../utils/db';
export const passwordChange  = async (req:Request , res:Response) => {
    
    try{
        const {email, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        await prisma.user.update({
            where:{email:email},
            data : {
                password:hashedPassword, 
                needReset:false
            }
         });

    res.status(200).json({
        message:"password changed successfully",
        login_link:"/api/auth/login",
    });

    }catch(error){
        res.status(500).json({
            message:"internal server error"
        });
        
    };
    
}