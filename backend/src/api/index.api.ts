import express from 'express';

import posts from './post.api';
import auth from './auth.api';

const router = express.Router();

router.use('/posts', posts);
router.use('/auth', auth);


export default router;