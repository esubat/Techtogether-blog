import express from 'express';
import { PrismaClient } from '@prisma/client';

import {
    getSinglePost,
    getAllPosts,
    addPost,
    updatePost,
    deletePost,
} from '../controller/post/index.post.controllers';


const router = express.Router()
const prisma = new PrismaClient()


router.post('/', addPost);
router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.put('/:id', updatePost);
router.delete('/:id',deletePost);


export default router;