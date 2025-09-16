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

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }

  const user = data?.data || {
    _id: "68bc815c01a83f24b0f59d79",
    name: "Roth Hancock",
    phone: "01812345678",
    role: "ADMIN",
    status: "ACTIVE",
    createdAt: "2025-09-06T18:45:48.552Z",
    updatedAt: "2025-09-14T21:51:36.169Z",
    wallet: {
      _id: "68bc815c01a83f24b0f59d7a",
      user: "68bc815c01a83f24b0f59d79",
      balance: 55,
      status: "ACTIVE",
      createdAt: "2025-09-06T18:45:48.555Z",
      updatedAt: "2025-09-07T18:45:04.435Z",
    },
  };

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
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 z-10 bg-sidebar">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-4 mr-8">
            <ModeToggle />
            <DashboardProfile />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-background">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
