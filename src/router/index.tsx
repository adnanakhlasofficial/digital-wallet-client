import App from "@/App";
import RootLayout from "@/components/layouts/RootLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
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
    ],
  },
]);

export default router;
