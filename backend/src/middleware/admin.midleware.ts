import prisma from "../utils/db";
import { Request,Response, NextFunction } from "express";

interface AuthorizedRequest extends Request{
    user?:{
        id:number;
        role: 'ADMIN' | 'WRITER';
    }
}

const AuthorizeAdmin = async(req:AuthorizedRequest, res:Response , next:NextFunction)=>{
    const UserRole = req.user?.role;

    if(UserRole != 'ADMIN'){
        return res.status(403).json({message:"access denied"})
    }

    next()
}

export default AuthorizeAdmin;