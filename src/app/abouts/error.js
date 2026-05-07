"use client"
export default function Erorr({error, reset}) {
  return (
    <div>
      <p>
      Something Went Wrong
      </p>
      <button onClick={() => {reset()}}>Try again</button>
    </div>
  )
}

