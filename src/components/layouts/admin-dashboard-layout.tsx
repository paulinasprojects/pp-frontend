import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/contexts/sidebar-context";
import Sidebar from "@/components/admin-dashboard/sidebar";
import Navbar from "@/components/admin-dashboard/navbar";

const AdminDashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-4 bg-[#f9fafb]">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboardLayout;
