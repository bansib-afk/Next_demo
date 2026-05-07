"use client"
import Header from "@/_components/Header";
import { useState } from "react";

export default function Abouts() {
  // but the error.js file will give the build error in normal routes because here with the error.js handle error at the build time but yes it will work with dynamic routes
  // to handle errors we manually throw the error
  // throw new Error("this page is not found")


  // client side exception handling
const [fruit, setFruits] = useState(["Mango", "apple"])
  const handleClick = () => {
    setFruits(null)
  }

  return (
    <div className="flex-1">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1>Abouts Page</h1>
        <p>Welcome to the Abouts Page</p>
      </div>
      <p>{fruit.map((fruit) => <p key={fruit}>{fruit}</p>)}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
