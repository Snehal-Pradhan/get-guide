import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-zinc-100 w-full h-screen flex items-center justify-center flex-col gap-6">
      <div className="text-3xl font-bold">Home</div>
      <div className="flex justify-center items-center gap-6">
        <Button asChild variant={"outline"} size="lg" >
          <SignInButton/>
        </Button>
        <Button asChild size="lg">
          <SignUpButton/>
        </Button>
      </div>
    </div>
  );
}
