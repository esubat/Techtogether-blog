import { Request, Response } from "express";
import prisma from "../../utils/db";
import SendPostToSubscribers from "../email/newpost.email.controller";

interface AuthorizedRequest extends Request{
    user?:{
        id:number;
        role: 'ADMIN' | 'WRITER';
    }
}


function isAuthRequest(req: Request): req is AuthorizedRequest {
    return (req as AuthorizedRequest).user !== undefined;
}

const addPost = async (req:AuthorizedRequest, res:Response , next:NextFunction) => {
    
    if (!isAuthRequest(req) || !req.user) {
        return res
            .status(401)
            .json({ msg: "Unauthorized: User not found!" });
    }
    
    const { title, description,content } = req.body;
    const {id:userId} = req.user;
    try { 
        if (!title || !content ) {
            return res
            .status(400)
            .json({ msg: 'Please enter the title and content!' });
        }

        const blog = await prisma.post.create({
            data: { 
                title, 
                description, 
                content , 
                authorId:userId
            }
        });

        SendPostToSubscribers({
            subject: "New Blog Post", 
            text: `A new blog post with title ${title} has been created! link: http://localhost:8080/api/posts/${blog.id}`
        });

        return res
        .status(201)
        .json({ msg: "Blog created successfully!", data: blog });

    } catch (error) {
        return res
        .status(500)
        .json({ msg: "Error creating the blog!" });
    }
};

export {addPost}