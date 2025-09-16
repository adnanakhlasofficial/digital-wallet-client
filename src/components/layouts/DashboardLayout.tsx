import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { Navigate, Outlet, useLocation } from "react-router";
import DashboardProfile from "../ui/DashboardProfile";
import { ModeToggle } from "../ui/ModeToggle";

export default function DashboardLayout() {
  const { data, isLoading } = useUserMeQuery(undefined);
  const { pathname } = useLocation();

  if (isLoading) {
    return <p>loading...</p>;
  }

  const user = data?.data;

  if (!user?.phone) {
    return <Navigate to="/login" state={pathname} />;
  }

  if (pathname === "/dashboard") {
    return <Navigate to="/dashboard/my-profile" />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-4 mr-8">
            <ModeToggle />
            <DashboardProfile />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
