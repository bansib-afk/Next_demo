export async function generateMetadata({params}){
    const { blog } = await params;

    return{
        title : `All Comments of the blog ${blog}`
    }
}

export default async function Comments({params}){

    console.log(await params)
    const { comment } = await params;
    return(
        <div className="bg-black flex-1 text-white">
            {/* this is called dynamic routings */}
            <div>
               All the Comments in {comment} page
            </div>
        </div>
    )
}