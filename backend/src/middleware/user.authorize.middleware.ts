import prisma from "../utils/db";
import { Request,Response, NextFunction } from "express";


interface AuthorizedRequest extends Request{
    user?:{
        id:number;
        role: 'ADMIN' | 'WRITER';
    }
}

const AuthorizeUser = async(req:AuthorizedRequest, res:Response , next:NextFunction)=>{

    const userId = req.user?.id
    const postID = parseInt(req.params.id)

    try {
        const post = await prisma.post.findUnique({
            where:{id:postID},
            include: { author: true },
        });
        console.log(!post)
        if(!post){
            return res.status(404)
        }

        const isAdmin = req.user?.role === 'ADMIN'
        const isOwner = post.authorId === userId

        if(!isAdmin && !isOwner){
            return res.status(403).json({message:"access denied"})
        }


    next()

    }

    catch(error){
        res.status(500)
    }

}


export default AuthorizeUser;