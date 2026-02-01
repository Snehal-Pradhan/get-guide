import { SignIn } from "@clerk/nextjs"

function page() {
  return (
    <SignIn forceRedirectUrl="/workspace" />
  )
}
export default page