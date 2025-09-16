import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { routesByRole } from "@/utils/routes-by-role";
import { ChevronsRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "./logo";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data } = useUserMeQuery(undefined);

  const sidebar = routesByRole(data?.data?.role);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          onClick={() => navigate("/")}
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
        >
          <div className="text-primary flex aspect-square size-10 items-center justify-center rounded-lg ">
            <Logo />
          </div>
          <div>
            <span className="font-bold tracking-wide text-xl align-text-top">
              Digital Wallet
            </span>
          </div>
          <ChevronsRight className="ml-auto" />
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {sidebar.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map(({ title, url, icon: Icon }) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild isActive={url === pathname}>
                      <Link to={url}>
                        <Icon /> {title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
