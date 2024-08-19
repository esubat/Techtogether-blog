import {Request, Response} from 'express';
import prisma from '../../utils/db';

const subscribeUser = async(req:Request, res:Response)=>{
    try{
        const {email} = req.body;
        await prisma.subscription.create({
            data:{
                email:email,
            }
        })
        res.status(200).json({message:'Subscription successful'})
    } catch(error){
        res.status(500).json({message:'Internal server error'})
    }
}

export default subscribeUser;