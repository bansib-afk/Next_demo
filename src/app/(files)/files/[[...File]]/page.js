export const metadata = {
    title : {
        absolute : "My Files"
    }
}

export default async function File({ params }) {
  console.log(await params);
  const { File } = await params;
  return (
    <div className="bg-black flex-1 text-white">
      {/* this is called optional catch all segment */}
      <div>
        <h1>File path : /{File?.join("/")}</h1>
      </div>
    </div>
  );
}
