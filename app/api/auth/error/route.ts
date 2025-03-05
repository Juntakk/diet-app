export function GET() {
  return new Response("Something went wrong with authentication.", {
    status: 500,
    headers: { "Content-Type": "text/plain" },
  });
}
