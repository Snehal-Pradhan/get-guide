import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

// ✅ Extract JSON data, don't return Response
async function getApiResponse() {
  const { getToken } = await auth();
  const token = await getToken();

  if (!token) {
    throw new Error("No token available");
  }

  console.log(token);
  
  const response = await fetch('http://localhost:3002/api/', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  // ✅ Return JSON data
  return response.json();
}

export default async function Page() {
  const data = await getApiResponse(); // Now this is JSON object

  return (
    <div>
      <div>Workspace</div>
      <UserButton/>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* ✅ Render actual data */}
    </div>
  );
}
