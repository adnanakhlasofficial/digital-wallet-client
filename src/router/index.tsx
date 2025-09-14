import App from "@/App";
import AuthLayout from "@/components/layouts/AuthLayout";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import RootLayout from "@/components/layouts/RootLayout";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UpdateUser from "@/pages/UpdateUser";
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
          {
            path: "update/user",
            Component: UpdateUser,
          },
        ],
      },
    ],
  },
]);

export default router;
