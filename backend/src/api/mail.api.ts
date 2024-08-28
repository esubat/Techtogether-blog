import express from 'express';
const router = express.Router();
import subscribeUser from '../controller/email/subscribe.controller';

router.post('/',subscribeUser);

export default router;