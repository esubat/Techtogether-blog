import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt  from "jsonwebtoken";
import { findUserbyEmail} from "../../services/users/user.services";

dotenv.config();

const jwtSecret  = process.env.JWT_SECRET

export const Login = async(req: Request,res:Response) => {
    
    try{
        const {email, password} = req.body;
        const user = await findUserbyEmail(email);
        if(!user) return res
                .status(400)
                .json({message:"user not found"});

        if(user.needReset) {
            return res
            .status(403)
            .json({message:"you need to change your password!" , 
                password_change_link : "/api/auth/reset"});
        }
                                
        const checkpassword = await bcrypt.compare(password,user.password)

        if (!checkpassword) return res.status(400).json({message:"invalid credentials"})
    
        const token = jwt.sign({
            id:user.id, 
            role:user.role},jwtSecret as string,{expiresIn : '7d'});

        res.cookie('access_token' , token )
        .status(200)
        .json({message:"Login successfull"})

    }catch(error){
        res.status(500).json({
            message:"internal server error"
        })
    }
}