export default function ServiceItem({ content }) {
    if (typeof window === "undefined") {
        console.log("Running ServiceItem as a Server Component");
    } else {
        console.log("Running ServiceItem as a Client Component");
    }
  return (<li>{content}</li>)
}
