import { Request, Response } from "express";
import prisma from "../../utils/db";


export const deletePost= async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        await prisma.post.delete({
            where: { id: parseInt(id) }
        });
        return res
        .status(200)
        .json({ message: "Post deleted successfully!" });

    } catch (error) {
        return res
        .status(500)
        .json({ message: "Couldn't delete the post!" });
    }
}