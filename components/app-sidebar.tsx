"use client";

import Link from "next/link";
import dashboardLogo from '../public/images/dashboardLogo.svg';
import { usePathname } from "next/navigation";
import {
  Home,

  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";


const userItems = [
  {
    title: "Overview",
    url: "/user-dashboard/overview",
    icon: Home,
  },

];


const adminItems = [
  {
    title: "Dashboard",
    url: "/admin-dashboard/dashboard",
    icon: Home,
  },
  
];


const ACTIVE_BG = "#CC990029";
const INACTIVE_TEXT = "#4B5563"; 
const INACTIVE_ICON = "#6B7280"; 



export function AppSidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname();
  const items = isAdmin ? adminItems : userItems;

  return (
    <Sidebar className=" bg-black pr-2">
      <SidebarContent className="flex h-full flex-col justify-between py-4">
        {/* TOP: Logo + menu */}
        <div>
          {/* Logo area */}
       <div>   <div className="flex items-center gap-2 px-4">


            <Image
              src={dashboardLogo}
              alt="AdPortal Logo"
              width={160}
              height={160}
              className="h-[66px] w-[200]"
            />


          </div>
          </div>

          <SidebarGroup>
            <SidebarGroupLabel className="px-4 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {/* empty label to match spacing */}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const isActive =
                    pathname === item.url || pathname.startsWith(item.url + "/");

                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`group mx-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#CC990029] text-[#D4A300] shadow-sm"
                            : "text-(--inactive-text) hover:bg-(--hover-bg)"
                        }`}
                        style={
                          isActive
                            ? {
                                backgroundColor: ACTIVE_BG,
                                color: "#D4A300",
                              }
                            : {
                                color: INACTIVE_TEXT,
                              }
                        }
                      >
                        <Link
                          href={item.url}
                          className="flex items-center gap-3"
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{
                              color: isActive ? "#D4A300" : INACTIVE_ICON,
                            }}
                          />
                          <span
                            className="truncate"
                            style={{
                              color: isActive ? "#D4A300" : INACTIVE_TEXT,
                            }}
                          >
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

       
        </div>

        {/* BOTTOM: Logout */}
        <div className="mt-4   pt-4">
          <button className="mx-4 flex w-[calc(100%-2rem)] items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-[#EF4444] hover:bg-red-50">
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
