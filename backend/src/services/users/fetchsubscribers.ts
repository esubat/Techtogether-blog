import prisma from "../../utils/db";

async function Subscribers(){
    return await prisma.subscription.findMany({
        select:{
            email:true,
        }
    })
}

export default Subscribers;