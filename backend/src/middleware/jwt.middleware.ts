import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

interface AuthorizedRequest extends Request{
    user ?: {
        id:number;
        role: 'ADMIN' | 'WRITER';
    }
}
const verifyJwt = async(req: AuthorizedRequest, res: Response, next: NextFunction) => {
  try{
    const token = req.cookies.access_token;
    if(!token){
      return res.status(401).json({message:"Unauthorized User"})
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      req.user = {
      id:decodedToken.id, 
      role:decodedToken.role
    }

    next()
   
  }catch(error){
    return res.status(401).json({message:"Unauthorized User"})
  }
}


export default verifyJwt;