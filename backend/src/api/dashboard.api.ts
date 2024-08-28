import express from 'express';
import DashboardData from '../controller/post/dashboard.posts.controller';
import verifyJwt from '../middleware/jwt.middleware';


const router = express.Router()

router.get('/' ,verifyJwt, DashboardData)

export default router;