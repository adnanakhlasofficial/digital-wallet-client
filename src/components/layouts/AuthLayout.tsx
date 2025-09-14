import { Outlet, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { HomeIcon } from "lucide-react";
import { ModeToggle } from "../navbar-components/ModeToggle";

export default function AuthLayout() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-8 flex max-w-7xl w-full justify-between items-center">
        <Button
          onClick={() => navigate("/")}
          variant={"outline"}
          className="flex gap-2 items-center"
        >
          <HomeIcon />
          Go to Home
        </Button>
        <ModeToggle />
      </div>

      <Outlet />
    </div>
  );
}
