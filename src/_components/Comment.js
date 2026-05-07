"use client";
export default function Comment() {
  // this condition is produce hydration error but in production  mode it will not give any error but it will change the content immediatly when page load so the user experience is poor this term is called as cls issue context shift thats why next js will show the error in development so that in production user experiance is good if we give same content for both then it will not cause the error minor change will give the error in the code 
  if (typeof window === "undefined") {
    return <div>Comment Component Server</div>;
  }
  console.log("Comment Component Client");
  return <div>Comment Component Client</div>;
}
