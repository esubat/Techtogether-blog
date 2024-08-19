import express from 'express';

import posts from './post.api';
import auth from './auth.api';
import subscribe from './mail.api';

const router = express.Router();

router.use('/posts', posts);
router.use('/auth', auth);
router.use('/subscribe',subscribe)

export default router;