import { Request,Response } from "express";
import prisma from "../../utils/db";
export const updatePost = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const post = await prisma.post.update({
            where: { id: parseInt(id) },
            data: { title, content }
        });

        return res.status(200).json({ message: "Post updated successfully!", post });

    } catch (error) {
        return res.status(500).json({ message: "Can't update the post!" });
    }
}