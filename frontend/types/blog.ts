export interface BlogListType{
    id:string | number;
    title:string;
    description : string;
}

export interface BlogDetailType{
    id: number;
    title: string;
    description: string;
    content: string;
    createdAt: string; 
    updatedAt: string;
}

