"use client"

import { useState } from "react";

export default function Like() {
  // if(typeof localStorage !== "undefined"){

  //   console.log(localStorage)
  // }
 console.log("LIkes Component");

const [like, setLike] = useState(0)
return (
  <div>
    {like}k likes 
    <button onClick={() => setLike(like+1)}>click me to increase like value</button>
  </div>
)
 
}

