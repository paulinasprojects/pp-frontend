import Sidebar from "@/components/admin-dashboard/sidebar";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/contexts/sidebar-context";

const AdminDashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-4 bg-[#e5e6e8]">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboardLayout;
