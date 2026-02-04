import { currentUser, auth } from "@clerk/nextjs/server";

async function page() {
  const user = await currentUser();
  const { userId, getToken } = await auth();
  const token = await getToken();

  let userServiceResponse = null;
  try {
    const res = await fetch(`${process.env.USER_SERVICE_URL}/api/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    if (res.ok) {
        userServiceResponse = await res.json();
    } else {
        userServiceResponse = { error: `Error: ${res.status} ${res.statusText}` };
    }
  } catch (error) {
    userServiceResponse = { error: "Failed to connect to user service" };
    console.error(error);
  }

  return (
    <div className="bg-accent h-screen p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">User Details</h1>
        <div className="space-y-4">
            <div>
                <strong>Name:</strong> {user?.firstName} {user?.lastName}
            </div>
            <div>
                <strong>Clerk ID:</strong> {userId}
            </div>
            <div className="break-all">
                <strong>Token:</strong>
                <pre className="font-mono text-xs bg-white/50 p-4 rounded-lg mt-2 whitespace-pre-wrap">
                    {token}
                </pre>
            </div>
            
            <div className="pt-4 border-t border-zinc-300">
                <h2 className="text-xl font-semibold mb-2">User Service Response</h2>
                <div className="text-sm text-zinc-600 mb-2">
                    Fetching from: <code className="bg-zinc-200 px-1 rounded">{process.env.USER_SERVICE_URL}/api/</code>
                </div>
                 <pre className="font-mono text-sm bg-black text-green-400 p-4 rounded-lg mt-2 overflow-auto">
                    {JSON.stringify(userServiceResponse, null, 2)}
                </pre>
            </div>
        </div>
    </div>
  )
}
export default page;