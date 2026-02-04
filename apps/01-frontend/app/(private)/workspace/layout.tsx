"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { FileText, Home, Pencil, Puzzle, Trophy, Waypoints, Settings, User } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

function WorkSpaceLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname.startsWith(path)
  }

  return (
    <div className="h-screen w-full bg-white flex flex-col">
      <div className="w-full shrink-0">
        <div className="h-1 w-full bg-linear-to-r from-[#0097b2] to-[#7ed957]">
        </div>
        <div className="bg-white h-[64px] border-b border-ui-border flex items-center px-3 pr-5 justify-between">
          <Image src="/getguide.svg" alt="logo" width={38} height={38} />
          <div className="flex gap-2">
            <div className="">
              <Button variant="outline" className="rounded-full px-5 gap-2">
                <User size={16} />
                Profile
              </Button>
            </div>
          <div className="h-[38px] aspect-square rounded-full  flex justify-center items-center">
            <UserButton/>
          </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 flex overflow-hidden">
        <div className="w-[60px] bg-white border-r border-ui-border flex flex-col items-center pt-6 gap-2 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="w-[40px] aspect-square border border-zinc-200 rounded-full flex items-center justify-center text-[#241c15] hover:bg-zinc-50 hover:border-zinc-300 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                <Pencil className="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-[#241c15] text-white [&_svg]:fill-[#241c15]">
              <p>Create Roadmap</p>
            </TooltipContent>
          </Tooltip>
        
          <div className="h-px w-8 bg-zinc-100 my-1" />

          {/* Navigation Items */}
          <NavButton 
            href="/workspace/home"
            icon={Home} 
            label="Home"
            isActive={isActive("/workspace/home")} 
          />
          <NavButton 
            href="/workspace/roadmaps"
            icon={Waypoints} 
            label="Roadmaps"
            isActive={isActive("/workspace/roadmaps")} 
          />
          <NavButton 
            href="/workspace/resumes"
            icon={FileText} 
            label="Resumes"
            isActive={isActive("/workspace/resumes")} 
          />
          <NavButton 
            href="/workspace/integrations"
            icon={Puzzle} 
            label="Integrations"
            isActive={isActive("/workspace/integrations")} 
          />
          <NavButton 
            href="/workspace/trophies"
            icon={Trophy} 
            label="Trophies"
            isActive={isActive("/workspace/trophies")} 
          />

          <div className="mt-auto pb-6">
            <NavButton 
              href="/workspace/settings"
              icon={Settings} 
              label="Settings"
              isActive={isActive("/workspace/settings")} 
            />
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-auto bg-gray-50/50">
          {children}
        </div>
      </div>
    </div>
  )
}

function NavButton({ icon: Icon, label, isActive, href }: { icon: React.ElementType, label: string, isActive: boolean, href: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link 
          href={href}
          className={`w-[36px] aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200 ${
            isActive 
              ? "bg-[#e1e8eb] text-[#241c15] shadow-sm" 
              : "text-zinc-500 hover:text-[#241c15] hover:bg-zinc-50"
          }`}
        >
          <Icon className="size-5 stroke-[1.5]" />
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="bg-[#241c15] text-white [&_svg]:fill-[#241c15]">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default WorkSpaceLayout