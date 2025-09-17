import { Navigate, Outlet, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { HomeIcon } from "lucide-react";
import { ModeToggle } from "../ui/ModeToggle";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import AuthSkeleton from "./AuthSkeleton";

export default function AuthLayout() {
  const navigate = useNavigate();
  const { data, isLoading } = useUserMeQuery(undefined);

  if (isLoading) return <AuthSkeleton />;

  if (data) {
    return <Navigate to={"/"} />;
  }

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
