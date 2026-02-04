import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function LandingNavbar() {
  return (
    <nav className="w-full flex items-center justify-between p-6 border-b border-zinc-200 bg-white/50 backdrop-blur-md sticky top-0 z-50">
      <Link href="/home" className="flex items-center gap-2">
        <Image src="/getguide.svg" alt="GetGuide Logo" width={32} height={32} />
        <span className="text-xl font-bold text-zinc-900">GetGuide</span>
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" className="text-zinc-600 hover:text-zinc-900">
          <SignInButton />
        </Button>
        <Button asChild className="bg-black text-white hover:bg-zinc-800 rounded-full px-6">
          <SignUpButton />
        </Button>
      </div>
    </nav>
  );
}
