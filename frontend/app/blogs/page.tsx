'use client'

import PostItems from "@/components/BlogList"
import api from "@/utils/api/base"
import Loading from "@/components/animations/loading"
import LoadingError from "@/components/ErrorPage";
export default function BlogListPage() {

  const {data, isLoading,isError} = api.blog.blogList.useQuery();

  if (isLoading){
    return(
      <div className="flex justify-center">
      <Loading />
    </div>
    )
  }

  if (isError){
    return(
      <div>
        <LoadingError />
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <div className="grid gap-6 max-w-3xl w-full px-4 py-12">
        {
        data.map((post) => {
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
