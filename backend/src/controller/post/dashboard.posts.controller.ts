import { Request, Response} from "express"
import prisma from "../../utils/db"

interface AuthorizedRequest extends Request{
    user?:{
        id:number;
        role: 'ADMIN' | 'WRITER'
    }
}

function isAuthRequest(req:Request): req is AuthorizedRequest{
    return (req as AuthorizedRequest).user !== undefined;
}

const DashboardData = async(req:AuthorizedRequest, res:Response) => {
    if(!isAuthRequest(req) || !req.user){
        return res.status(401).json({message:"Unauthorized User"})

    }

    const authorId = req.user.id;
    const authorRole = req.user.role;

    const published_posts = await prisma.post.count({
        where:{
            authorId : authorId
        }

        })
    const draft_posts = await prisma.post.count({
        where:{
            authorId : authorId,
            published : false
        }
    })
    const email_subscribers =await prisma.subscription.count();
    const data = {
        published_posts : published_posts,
        published_posts_link : "/dashboard/posts/published",
        draft_posts : draft_posts,
        draft_post_link : "/dashboard/posts/draft",
        role : authorRole,
        email_subscribers : email_subscribers,
    }
    res.status(200).json({message:"dashboared data" , data})
}

export default DashboardData;