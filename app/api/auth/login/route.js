export async function POST(req) {
  const { email, password } = await req.json();

  if (email && password) {
    return Response.json({ success: true });
  }

  return Response.json({ success: false });
}