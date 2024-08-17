import express from 'express';
import { PrismaClient } from '@prisma/client';
import verifyJwt from "../middleware/jwt.middleware";
import {
    getSinglePost,
    getAllPosts,
    addPost,
    updatePost,
    deletePost,
} from '../controller/post/index.post.controllers';


const router = express.Router()
const prisma = new PrismaClient()


router.post('/create',verifyJwt, addPost);
router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id',deletePost);


export default router;