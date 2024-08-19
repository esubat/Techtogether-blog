import express from 'express'
import { 
    registerUser,
    Login,
    passwordChange,
} from '../controller/auth/index.auth';
import verifyJwt from '../middleware/jwt.middleware';
import AuthorizeAdmin from '../middleware/admin.midleware';
const router = express.Router()


router.post('/register',verifyJwt,AuthorizeAdmin,registerUser);
router.post('/login', Login);
router.put('/reset',verifyJwt,passwordChange)

export default router;