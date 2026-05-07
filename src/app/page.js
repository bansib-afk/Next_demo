import Link from "next/link";
import Page from "../_components/page";
import Like from "../_components/Like";
import Comment from "../_components/Comment";
import Post from "../_components/Post";
import Header from "../_components/Header";
import "./home.css"
import http from "http"


const server = http.createServer((req, res) => {
  res.end("hello from next server")
})

server.listen(4000, () => {
  console.log("server started")
})

export default async function Home() {
  return (
    <>
      <div className="flex-1">

        <div className="flex justify-center items-center flex-col gap-5">
          <h1>Home Page</h1>
          <p>Welcome to the Home Page</p>
        </div>
      </div>
    </>
  );
}
// this is for the practice

// in next js by default all the components are server component and run only on the server while client component will run on client as well as server
{
  /* <div> */
}
{
  /* <h1>Posts</h1>        a tag will completely reload the entire page in next so that we use link tag which is provided by next js */
}
{
  /* <a href="/about">About</a> */
}
{
  /* <Page />
        <Link href="/about">About</Link>
        <Like />
        <Comment /> */
}
{
  /* <Post /> */
}
{
  /* </div> */
}
