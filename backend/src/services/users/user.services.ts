import prisma from "../../utils/db";
async function findUserbyEmail(email : string){
    return await prisma.user.findUnique({
        where:{
            email,
        }
    })
}


export {
    findUserbyEmail,
}