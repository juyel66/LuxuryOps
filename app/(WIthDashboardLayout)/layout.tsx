// src/app/(WithDashboardLayout)/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import DashboardNavbar from "../Pages/CommonPages/DashboardNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar />

        {/* MAIN CONTENT FIXED */}
        <main className="flex items-start justify-center flex-1 w-full pl-6 pr-6 bg-black border border-gray-700 ">
          
          {/* Trigger stays on top-left */}
          <div className="absolute left-4 top-4">
            <SidebarTrigger />
          </div>

         
          <div className="w-full ">
            <div>
              <DashboardNavbar />
            </div>
            {children}
          </div>

        </main>
      </div>
    </SidebarProvider>
  );
}
