"use client";

import Link from "next/link";
import dashboardLogo from "../public/images/dashboardLogo.svg";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import type { ComponentType, CSSProperties } from "react";
import {
  Home,
  Calendar,
  ClipboardList,
  Building2,
  Landmark,
  Car,
  Users,
  User,
  Truck,
  Shield,
  FileText,
  DollarSign,
  BarChart3,
  CreditCard,
  Folder,
  Globe,
  Activity,
  Settings,
  LogOut,
  ArrowLeft,
  ChevronDown,
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

type SidebarLink = {
  title: string;
  icon?: ComponentType<{ className?: string; style?: CSSProperties }>;
  url?: string;
};

type SidebarItem =
  | { section: string }
  | { type: "divider" }
  | (SidebarLink & { children?: SidebarLink[] });

const adminItems: SidebarItem[] = [
  { section: "MAIN" },
  { title: "Overview", icon: Home, url: "/admin-dashboard/overview" },
  { title: "Bookings", icon: Calendar, url: "/admin-dashboard/bookings" },
  { title: "Hotels", icon: Building2, url: "/admin-dashboard/hotels" },
  { title: "Entities", icon: Landmark, url: "/admin-dashboard/entities" },
  { title: "Fleet", icon: Car, url: "/admin-dashboard/fleet-management" },
  {
    title: "People",
    icon: Users,
    children: [
      { title: "User Management", icon: User, url: "/admin-dashboard/user-management" },
      { title: "Drivers", icon: Truck, url: "/admin-dashboard/drivers-management" },
      { title: "Team", icon: Shield, url: "/admin-dashboard/team-management" },
    ],
  },
  {
    title: "Customers",
    icon: Folder,
    children: [
      { title: "Villa Enquiries", url: "/admin-dashboard/villa-enquiries" },
      { title: "Contact Submissions", url: "/admin-dashboard/contact-submissions" },
      { title: "Login History", url: "/admin-dashboard/login-history" },
    ],
  },
  { section: "FINANCE" },
  { title: "Invoices", icon: FileText, url: "/admin-dashboard/invoices" },
  { title: "Accounting", icon: DollarSign, url: "/admin-dashboard/accounting" },
  {
    title: "Summary",
    icon: BarChart3,
    children: [{ title: "Financial Summary", url: "/admin-dashboard/financial-summary" },
      { title: "Driver Summary", url: "/admin-dashboard/driver-summary" }
    ],
  },
  { title: "Payroll", icon: CreditCard, url: "/admin-dashboard/payroll" },
  { section: "SYSTEM" },
  {
    title: "Website",
    icon: Globe,
    children: [
      { title: "Villas", url: "/admin-dashboard/villas" },
      { title: "Service", url: "/admin-dashboard/service" },
      { title: "Testimonial", url: "/admin-dashboard/testimonial" },
      { title: "User Review", url: "/admin-dashboard/user-review" },
    ],
  },
  { title: "Analytics", icon: Activity, url: "/admin-dashboard/analytics" },
  { title: "Settings", icon: Settings, url: "/admin-dashboard/settings" },
  { type: "divider" },
  { title: "Logout", icon: LogOut, url: "/logout" },
  { title: "Back to Website", icon: ArrowLeft, url: "/" },
];


const userItems = [
  {
    title: "Dashboard",
    url: "/user-dashboard/dashboard",
    icon: Home,
  },
  
];


const ACTIVE_BG = "#CC990029";
const INACTIVE_TEXT = "#E5E7EB"; 
const INACTIVE_ICON = "#C7CBD6"; 



export function AppSidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname();
  const items = isAdmin ? userItems : adminItems;
  const defaultOpenGroups = useMemo(() => {
    const nextOpenGroups: Record<string, boolean> = {};

    for (const item of items) {
      if ("section" in item || ("type" in item && item.type === "divider")) {
        continue;
      }

      if (
        "children" in item &&
        item.children?.some((child) => child.url && pathname.startsWith(child.url))
      ) {
        nextOpenGroups[item.title] = true;
      }
    }

    return nextOpenGroups;
  }, [items, pathname]);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    () => defaultOpenGroups
  );

  const isSectionItem = (item: SidebarItem): item is { section: string } =>
    "section" in item;

  const isDividerItem = (item: SidebarItem): item is { type: "divider" } =>
    "type" in item && item.type === "divider";

  const isGroupItem = (
    item: SidebarItem
  ): item is SidebarLink & { children: SidebarLink[] } =>
    !isSectionItem(item) && !isDividerItem(item) && Array.isArray((item as SidebarLink & { children?: SidebarLink[] }).children);

  return (
    <Sidebar className="pr-2 bg-black ">
      <SidebarContent className="flex flex-col justify-between h-full py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => {
                  if (isSectionItem(item)) {
                    return (
                      <SidebarMenuItem key={`${item.section}-${index}`}>
                        <SidebarGroupLabel className="px-4 pt-4 pb-1 text-xs font-semibold tracking-wide text-gray-300 uppercase">
                          {item.section}
                        </SidebarGroupLabel>
                      </SidebarMenuItem>
                    );
                  }

                  if (isDividerItem(item)) {
                    return (
                      <SidebarMenuItem key={`divider-${index}`} className="my-2">
                        <div className="h-px mx-4 bg-white/10" />
                      </SidebarMenuItem>
                    );
                  }

                  if (isGroupItem(item)) {
                    const isOpen = openGroups[item.title] ?? false;
                    const isActive = item.children.some(
                      (child) => child.url && (pathname === child.url || pathname.startsWith(child.url + "/"))
                    );
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="space-y-1">
                        <SidebarMenuItem>
                          <SidebarMenuButton
                            type="button"
                            onClick={() =>
                              setOpenGroups((current) => ({
                                ...current,
                                [item.title]: !isOpen,
                              }))
                            }
                            className={`group mx-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                              isOpen || isActive
                                ? "bg-[#CC990029] text-[#D4A300] shadow-sm"
                                : "text-(--inactive-text) hover:bg-(--hover-bg)"
                            }`}
                            style={
                              isOpen || isActive
                                ? {
                                    backgroundColor: ACTIVE_BG,
                                    color: "#D4A300",
                                  }
                                : {
                                    color: INACTIVE_TEXT,
                                  }
                            }
                          >
                            {Icon ? (
                              <Icon
                                className="w-4 h-4"
                                style={{
                                  color: isOpen || isActive ? "#D4A300" : INACTIVE_ICON,
                                }}
                              />
                            ) : null}
                            <span className="flex-1 truncate">{item.title}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : "rotate-0"
                              }`}
                              style={{
                                color: isOpen || isActive ? "#D4A300" : INACTIVE_ICON,
                              }}
                            />
                          </SidebarMenuButton>
                        </SidebarMenuItem>

                        {isOpen
                          ? item.children.map((child) => {
                              const childActive =
                                child.url &&
                                (pathname === child.url || pathname.startsWith(child.url + "/"));
                              const ChildIcon = child.icon;

                              return (
                                <SidebarMenuItem key={child.title}>
                                  <SidebarMenuButton
                                    asChild
                                    className={`group  mx-2 ml-8 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                                      childActive
                                        ? "bg-[#CC990029] text-[#D4A300] shadow-sm"
                                        : "text-(--inactive-text)  hover:bg-(--hover-bg)"
                                    }`}
                                    style={
                                      childActive
                                        ? {
                                            backgroundColor: ACTIVE_BG,
                                            color: "#D4A300",
                                          }
                                        : {
                                            color: INACTIVE_TEXT,
                                          }
                                    }
                                  >
                                    <Link href={child.url ?? "#"} className="flex items-center gap-3">
                                      {ChildIcon ? (
                                        <ChildIcon
                                          className="w-4 h-4"
                                          style={{
                                            color: childActive ? "#D4A300" : INACTIVE_ICON,
                                          }}
                                        />
                                      ) : null}
                                      <span
                                        className="truncate"
                                        style={{
                                          color: childActive ? "#D4A300" : INACTIVE_TEXT,
                                        }}
                                      >
                                        {child.title}
                                      </span>
                                    </Link>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              );
                            })
                          : null}
                      </div>
                    );
                  }

                  const leafItem = item as SidebarLink;
                  const isActive =
                    leafItem.url &&
                    (pathname === leafItem.url || pathname.startsWith(leafItem.url + "/"));
                  const Icon = leafItem.icon;

                  return (
                    <SidebarMenuItem key={leafItem.title}>
                      <SidebarMenuButton
                        asChild
                        className={`group mx-2  rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
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
                        <Link href={leafItem.url ?? "#"} className="flex items-center gap-3">
                          {Icon ? (
                            <Icon
                              className="w-4 h-4"
                              style={{
                                color: isActive ? "#D4A300" : INACTIVE_ICON,
                              }}
                            />
                          ) : null}
                          <span
                            className="truncate"
                            style={{
                              color: isActive ? "#D4A300" : INACTIVE_TEXT,
                            }}
                          >
                            {leafItem.title}
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
        <div className="pt-4 mt-4">
          {/* <button className="mx-4 flex w-[calc(100%-2rem)] items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-[#EF4444] hover:bg-red-50">
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button> */}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
