// src/app/(WithDashboardLayout)/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar />

        {/* MAIN CONTENT FIXED */}
        <main className="flex items-start justify-center flex-1 w-full p-6 bg-black border border-gray-700 ">
          
          {/* Trigger stays on top-left */}
          <div className="absolute left-4 top-4">
            <SidebarTrigger />
          </div>

         
          <div className="w-full ">
            <div className="p-3 text-2xl text-center border-2">This is dashboard navbar </div>
            {children}
          </div>

        </main>
      </div>
    </SidebarProvider>
  );
}
