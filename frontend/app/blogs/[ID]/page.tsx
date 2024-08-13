'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { BlogPostType } from "@/types/blogPost";
import BlogDetail from "@/components/IndividualPost";
import Loading from "@/components/animations/loading";

export default function Component() {
    const params = useParams();
    const id = params?.ID;
    const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);

    console.log(id)
    useEffect(() => {

        fetch(`http://localhost:8080/api/posts/${id}`)
        .then((res)=>res.json())
        .then(data => {
          setBlogPost(data?.post)
        })
        .catch(error => {
          console.log("can't fetch the blog!", error)
        });
    }, []);

    if (!blogPost){
      return(
        <Loading />
  )};

console.log(blogPost)

return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <BlogDetail 
       post={blogPost}
      />

    </div>
  )
}