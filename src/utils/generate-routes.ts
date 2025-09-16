import type { ISidebarItem } from "@/types";

export function generateRoutes(data: ISidebarItem[]) {
  return data.flatMap((section) => section.items.map(route => ({
    path: route.url,
    Component: route.component
  })))
}
