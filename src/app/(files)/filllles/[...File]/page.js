export default async function File({params}){

    const { File } = await params
    return(
        <div className="bg-black flex-1 text-white">
            {/* this is called catch all segment */}
            <div>
                <h1>
             File path : /{File.join("/")}
                </h1>
            </div>
        </div>
    )
}