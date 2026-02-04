import {
  CalendarDays,
  Inbox,
  Medal,
  Plus,
  ScrollText,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  roadmaps: [
    {
      name: "Frontend Developer",
      url: "#",
    },
    {
      name: "Backend Engineer",
      url: "#",
    },
    {
      name: "DevOps Engineer",
      url: "#",
    },
    {
      name: "Full Stack",
      url: "#",
    },
    {
      name: "Data Scientist",
      url: "#",
    },
    {
      name: "Mobile Dev",
      url: "#",
    },
    {
      name: "UI/UX Designer",
      url: "#",
    },
    {
      name: "Product Manager",
      url: "#",
    },
    {
      name: "Cybersecurity",
      url: "#",
    },
    {
      name: "Cloud Architect",
      url: "#",
    },
    {
      name: "Game Developer",
      url: "#",
    },
    {
      name: "Blockchain Dev",
      url: "#",
    },
    {
      name: "QA Engineer",
      url: "#",
    },
    {
      name: "Database Admin",
      url: "#",
    },
    {
      name: "Systems Analyst",
      url: "#",
    },
    {
      name: "Network Engineer",
      url: "#",
    },
    {
      name: "Embedded Systems",
      url: "#",
    },
    {
      name: "Machine Learning",
      url: "#",
    },
    {
      name: "Technical Writer",
      url: "#",
    },
    {
      name: "Site Reliability",
      url: "#",
    },
  ],
  integrations: [
    {
      name: "Emails",
      url: "#",
      icon: Inbox,
    },
    {
      name: "Calendar",
      url: "#",
      icon: CalendarDays,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="dark bg-zinc-900 text-white" {...props}>
      <SidebarHeader className="bg-transparent">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              size="default" 
              className="justify-center bg-gradient-to-b from-zinc-700 to-zinc-800 text-white shadow-[0_2px_0_0_#18181b] hover:from-zinc-600 hover:to-zinc-700 active:shadow-none active:translate-y-[2px] transition-all border border-zinc-600 group-data-[collapsible=icon]:rounded-full group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-0 mt-2 group-data-[collapsible=icon]:mt-0"
            >
              <Plus className="hidden group-data-[collapsible=icon]:block size-5 font-bold stroke-[3px]" />
              <span className="font-bold group-data-[collapsible=icon]:hidden">Create Roadmap</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="px-2 py-1 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">
          Roadmaps
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.roadmaps} isRoadmaps={true} />
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2 -mx-2 min-w-[calc(100%+1rem)] bg-sidebar-border" />
        <div className="px-2 py-1 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">
          Integrations
        </div>
        <SidebarMenu>
          {data.integrations.map((item) => (
             <SidebarMenuItem key={item.name}>
               <SidebarMenuButton>
                 {item.icon && <item.icon />}
                 <span>{item.name}</span>
               </SidebarMenuButton>
             </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <Separator className="my-2 -mx-2 min-w-[calc(100%+1rem)] bg-sidebar-border" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <ScrollText />
              <span>Resumes</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Medal />
              <span>Trophies</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
