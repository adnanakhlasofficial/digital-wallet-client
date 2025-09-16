import { ChevronDownIcon, Home, LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  authApi,
  useLogoutMutation,
  useUserMeQuery,
} from "@/redux/features/auth/auth.api";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@/redux/hooks";
import { getUserInitials } from "@/utils/get-user-initials";
import { toast } from "sonner";

export default function DashboardProfile() {
  const { data } = useUserMeQuery(undefined);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

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

  const userNameAvatar = getUserInitials(user?.name);

  async function handleLogout() {
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState());
      toast.success("Logout successfully");
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 group bg-none hover:bg-transparent dark:hover:bg-transparent"
        >
          <Avatar>
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback className="font-medium tracking-widest bg-popover-foreground text-popover">
              {userNameAvatar || "U"}
            </AvatarFallback>
          </Avatar>
          <ChevronDownIcon
            size={16}
            className="opacity-60 group-hover:animate-bounce"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user?.phone}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => navigate("/")}>
            <Home size={16} className="opacity-60" aria-hidden="true" />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
            <span onClick={handleLogout}>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
