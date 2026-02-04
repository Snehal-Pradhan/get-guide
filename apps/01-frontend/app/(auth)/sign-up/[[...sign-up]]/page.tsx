import { SignUp } from "@clerk/nextjs"

function page() {
  return (
    <SignUp forceRedirectUrl="/workspace"/>
  )
}
export default page