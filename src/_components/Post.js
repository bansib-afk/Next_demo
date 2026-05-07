"use client";

// this is the data fetching with theb client
import { useEffect, useState } from "react";

export default function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=8",
      );
      const data = await response.json();
      setPost(data);
    }
    fetchPosts();
  }, []);
  return (
    <div>
      <h3>Post Lists</h3>
      <div className="p-2">
        {
            post.map(({id,title, body}) => (
                <div className="m-2 space-y-5" key={id}>
                    <h1>{title}</h1>
                    <p>{body}</p>
                    </div>
            ))
        }
      </div>
    </div>
  );
}
