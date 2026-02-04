import { LandingNavbar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <LandingNavbar />
      
      <main className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
            Welcome to GetGuide
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Your roadmap to success. Create, share, and track your learning journey with AI-powered guides.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <SignInButton />
          </Button>
          <Button asChild size="lg" className="rounded-full px-8 bg-zinc-900 text-white hover:bg-zinc-800">
            <SignUpButton />
          </Button>
        </div>
      </main>
    </div>
  );
}
