import { UseBaseQueryOptions, useQuery } from "@tanstack/react-query";
import { getBlogList, getBlogDetail } from "./blog";
import { BlogListType,BlogDetailType } from "@/types/blog";

const blog = {
    blogList:{
        useQuery:(options?: UseBaseQueryOptions<BlogListType>) => useQuery({
            queryKey:['posts'],
            queryFn:() => getBlogList(),
            ...options,
        }),
    },
    
    blogDetail :{
        useQuery:(id:string, Options?:UseBaseQueryOptions<BlogDetailType>) => {
            const validID = Array.isArray(id) ? id[0] : id;
            return useQuery({
            queryKey:['posts',validID],
            queryFn:() => getBlogDetail(validID),
            ...Options,
        });
    },
    },
}


export default blog;