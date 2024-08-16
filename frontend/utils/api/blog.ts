import axios from 'axios';


async function getBlogList(){
    return (await axios.get("http://localhost:8080/api/posts")).data.posts;

}

async function getBlogDetail(id:string){
   return (await axios.get("http://localhost:8080/api/posts/"+id)).data.post;
}


export {
    getBlogList,
    getBlogDetail
}