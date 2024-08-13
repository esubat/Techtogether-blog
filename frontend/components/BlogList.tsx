import {Avatar, AvatarImage , AvatarFallback} from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import {BlogList} from '@/types/blogList'

interface BlogListProps{
  post : BlogList
}
export default function PostItems({post}:BlogListProps){

    return (
        <div className="flex gap-4 items-start mb-5">
          <Image
            src="/blogs/placeholder.png"
            alt="Blog Post Thumbnail"
            width={200}
            height={150}
            className="rounded-lg w-[200px] h-[150px] object-cover"
            style={{ aspectRatio: "200/150", objectFit: "cover" }}
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-muted-foreground">
              {post.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="w-5 h-5">
                <AvatarImage src="/blogs/placeholder.png" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium">John Doe</span>
              <span>•</span>
              <span>August 11, 2024</span>
            </div>
            <Link
              href={`/blogs/${post.id}`}
            >
              
            <button
              className="inline-flex items-center gap-2 mt-6 text-primary hover:bg-black hover:text-primary-foreground px-4 py-2 rounded-md transition-colors border border-primary"
              >
              Read more
              {/* <ArrowRightIcon className="h-4 w-4" /> */}
            </button>
            </Link>
          </div>
        </div>
    );
}
