import { Request, Response } from "express";
import prisma from "../../utils/db";



const getAllPosts = async(req: Request,res :Response) => {
    try{
    const posts = await prisma.post.findMany({
        select:{
            id:true,
            title:true,
            description:true,
        }
    });
    return res.status(200).json({ data: posts.length, posts });

} catch (error) {
    return res.status(500).json({ message: "Error fetching blogs!" });
}
}


const getSinglePost = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const post = await prisma.post.findUnique ({
            where:{ 
               id : parseInt(id),
            },
            select: {
                id: true,
                title: true,
                description: true,
                content: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if(!post){
           return res.status(404).json({message: "can not get the post"})
        }
        return res.status(200).json({post:post})

    } catch (error) {
        return res.status(500).json({ message: "Error fetching the blog!" });
    }
}





export {
    getAllPosts,
    getSinglePost};