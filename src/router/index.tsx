import App from "@/App";
import AuthLayout from "@/components/layouts/AuthLayout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import RootLayout from "@/components/layouts/RootLayout";
import {
  adminSidebar,
  agentSidebar,
  commonSidebar,
  userSidebar,
} from "@/constants/sidebar-links";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import type { ISidebarItem } from "@/types";
import { generateRoutes } from "@/utils/generate-routes";
import { routesByRole } from "@/utils/routes-by-role";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    Component: App,
    children: [
      {
        path: "/",
        Component: RootLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "/contact",
            Component: Contact,
          },
          {
            path: "/about",
            Component: About,
          },
        ],
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: "/login",
            Component: Login,
          },
          {
            path: "/register",
            Component: Register,
          },
        ],
      },
      {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
          ...generateRoutes([
            ...commonSidebar,
            ...adminSidebar,
            ...userSidebar,
            ...agentSidebar,
          ]),
        ],
      },
    ],
  },
]);

export default router;
