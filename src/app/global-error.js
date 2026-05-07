"use client";

export default function GlobalError() {
  return (
    <html>
      <body>
        <h2>A critical error occurred.</h2>
        <button onClick={() => window.location.reload()}>Try again</button>
      </body>
    </html>
  );
}
