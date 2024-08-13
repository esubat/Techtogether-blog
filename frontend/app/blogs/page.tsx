'use client'

import { useState, useEffect } from "react"
import PostItems from "@/components/BlogList"
import { BlogList } from "@/types/blogList"
export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogList[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data?.posts || [])
      })
      .catch(error => {
        console.error("Error fetching posts:", error)
      })
  }, [])

  console.log(posts)
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 max-w-3xl w-full px-4 py-12">
        {posts.map((post) => {
           return (
            <PostItems
              post={post}
            />
          );
        })}
      </div>
    </div>
  )
}
