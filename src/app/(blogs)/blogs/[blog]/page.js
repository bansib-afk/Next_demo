import { notFound } from "next/navigation";

export async function generateMetadata({params}){
     const { blog } = await params;

     return{
        title : `Blog ${blog}`
     }
}



export default async function Blogs({params}){

    console.log(await params)
    const { blog } = await params;
    if(!/^\d+$/.test(blog) ){
        notFound()
    }
    return(
        <div className="bg-black flex-1 text-white">
            {/* this is called dynamic routings */}
            <div>
               {blog}
            </div>
        </div>
    )
}