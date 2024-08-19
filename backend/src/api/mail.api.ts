import express from 'express';
const router = express.Router();
import subscribeUser from '../controller/mail/subscribe.controller';

router.post('/',subscribeUser);

export default router;