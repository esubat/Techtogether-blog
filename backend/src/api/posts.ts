import express from 'express';
import { PrismaClient } from '@prisma/client';


const router = express.Router()
const prisma = new PrismaClient()


// POST method to add a new blog post
router.post('/post', async (req, res) => {
    try { 
        const { title, description,content } = req.body;

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
});

// GET method to fetch all blog posts
router.get('/posts', async (req, res) => {
    try {

        const blogs = await prisma.post.findMany();
        return res.status(200).json({ data: blogs.length, blogs });

    } catch (error) {
        return res.status(500).json({ message: "Error fetching blogs!" });
    }
});

// PUT method to update an existing blog post by ID
router.put('/:id', async (req, res) => {
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
});

// DELETE method to remove a blog post by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.post.delete({
            where: { id: parseInt(id) }
        });
        return res.status(200).json({ message: "Post deleted successfully!" });

    } catch (error) {
        return res.status(500).json({ message: "Couldn't delete the post!" });
    }
});


export default router;