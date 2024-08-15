import express from 'express'
import { 
    registerUser,
    Login,
    passwordChange,
} from '../controller/auth/index.auth';

const router = express.Router()


router.post('/register',registerUser);
router.post('/login', Login);
router.put('/reset',passwordChange)

export default router;