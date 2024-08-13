import { Avatar, AvatarImage,AvatarFallback } from "@radix-ui/react-avatar"
import Image from "next/image";
import { BlogPostType } from "@/types/blogPost";


interface BlogPostProps{
    post:BlogPostType
}
export default function BlogDetail({post}:BlogPostProps){
    return (
    <div>
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-3xl text-gray-900">
          {post.title}
          </h1>
          <p className="text-muted-foreground">
              {post.description}
            </p>
          <div className="flex items-center gap-4">
           <Avatar className="h-10 w-10 rounded-full bg-gray-400">
              <AvatarImage src="/icons/user.svg" alt="@shadcn" />
              <AvatarFallback>ET</AvatarFallback>
            </Avatar>
            <div className="text-sm text-muted-foreground pt-2">
              <div className="font-medium text-[#0d1117]">Esubalew Teshager</div>
              <div>
                Published: <time>Aug 24, 2023</time>
              </div>
              <div>
                modified: <time>Aug 25, 2023</time>
              </div>
            </div>
          </div>
        </div>
        <figure className="lg:-mx-12 xl:-mx-20 my-5">
          <Image
            src="/blogs/placeholder.png"
            alt="Featured image"
            width={1250}
            height={340}
            className="aspect-video overflow-hidden rounded-lg object-cover "
          />
          <figcaption className="text-center my-6">The future of web development is here.</figcaption>
        </figure>
        <p>{ post.content }</p>
      </article>
    </div>
    )
}