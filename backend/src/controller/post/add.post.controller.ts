import { Request, Response } from "express";
import prisma from "../../utils/db";

const addPost = async (req:Request, res:Response) => {
    const { title, description,content } = req.body;
    // console.log(req)
    try { 
        if (!title || !content ) {
            return res.status(400).json({ msg: 'Please enter the title and content!' });
        }

        const blog = await prisma.post.create({
            data: { title, description, content }
        });
        return res.status(201).json({ msg: "Blog created successfully!", data: blog });

    } catch (error) {
        return res.status(500).json({ msg: "Error creating the blog!" });
    }
};

export {addPost}