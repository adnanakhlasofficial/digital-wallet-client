import { adminSidebar, userSidebar } from "@/constants/sidebar-links";
import { userRole } from "@/constants/user-role";
import type { TRole } from "@/types";

export function routesByRole(role: TRole) {
  switch (role) {
    case userRole.admin:
      return adminSidebar;
    case userRole.agent:
      return userSidebar;
    case userRole.user:
      return userSidebar;
    default:
      return []
  }
}
