import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blog } = await params;
  // this is the manual error for dynamic pages with the help of error.js
  // if(blog % 2 === 0){
  //     throw new Error("this page is not found")
  // }

  // errors that are occured sometimes not everytime

//   const randomnumber = Math.random();
//   console.log(randomnumber);
  
//   if (randomnumber > 0.5) {
//     throw new Error("Error Occured");
//   }

  return {
    title: `Blog ${blog}`,
  };
}

export default async function Blogs({ params }) {
  console.log(await params);
  const { blog } = await params;
  if (!/^\d+$/.test(blog)) {
    notFound();
  }
  return (
    <div className="bg-black flex-1 text-white">
      {/* this is called dynamic routings */}
      <div>{blog}</div>
    </div>
  );
}
