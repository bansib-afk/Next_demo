export async function generateMetadata({params}){
    const { comment } = await params;

    return{
        title : `Comment ${comment}`
    }
}

export default async function Comments({params}){

    console.log(await params)
    const { comment, blog } = await params;
    return(
        <div className="bg-black flex-1 text-white">
            {/* this is called dynamic routings */}
            <div>
              Total Comments : <i>{comment}</i> on <i><b>{blog}</b></i> page
            </div>
        </div>
    )
}