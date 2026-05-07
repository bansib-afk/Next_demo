"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function Erorr({error, reset}) {
  const router = useRouter()
  return (
    <div>
      <p>
      Something Went Wrong
      </p>
      {/* first way */}
      {/* <p>
        Try to reload this page
      </p> */}
      {/* second way */}
      {/* <button onClick={() => window.location.reload()}>Try again</button> */}
      {/* third way we only render that component again not hard reload whole page */}
      {/* this error is handle in production without giving any error */}
      <button onClick={() => {
        startTransition(() => {
          router.refresh()
        reset()
        })
        }}>Try again</button>
    </div>
  )
}
