"use client"

import { useParams } from "next/navigation";
import BlogDetail from "@/components/IndividualPost";
import Loading from "@/components/animations/loading";
import api from "@/utils/api/base";
import LoadingError from "@/components/ErrorPage";

export default function Component() {
    const params = useParams();
    const id = params?.ID;
    const {data, isLoading,isError} = api.blog.blogDetail.useQuery(id);
    
    if (isLoading){
      return(
        <Loading />
  )};

  if(isError){
    return(
      <LoadingError />
    )
  }


  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <BlogDetail 
       post={data}
      />

    </div>
  )
}