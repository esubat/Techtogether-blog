import express from 'express'
import { 
    registerUser,
    login,
    passwordChange,
} from '../controller/auth/index.auth';

const router = express.Router()


router.post('/register',registerUser);
router.post('/login', login);
router.put('/reset',passwordChange)

export default router;