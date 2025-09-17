import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { userRole } from "@/constants/user-role";
import { cn } from "@/lib/utils";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import type { IUser } from "@/types";
import { formatCurrency } from "@/utils/format-currency";
import { getUserInitials } from "@/utils/get-user-initials";
import { getUserStatusVariant } from "@/utils/status-functions";
import { format } from "date-fns";
import { Calendar, Eye, Phone, Search, Send, Wallet } from "lucide-react";
import { useNavigate } from "react-router";

export default function UserTable() {
  const navigate = useNavigate();
  const { data: allUsers } = useGetAllUsersQuery(undefined);
  const { data: userMeData } = useUserMeQuery(undefined);

  const users = allUsers?.data as IUser[];
  const userMe = userMeData?.data as IUser;

  console.log(users);

  function handleSend(role: string, walletId: string) {
    if (userMe.role === userRole.agent && role === userRole.user) {
      return navigate(`/dashboard/cash-in/${walletId}`);
    } else if (userMe.role === userRole.user && role === userRole.agent) {
      return navigate(`/dashboard/cash-out/${walletId}`);
    } else if (userMe.role === userRole.user && role === userRole.user) {
      return navigate(`/dashboard/send-money/${walletId}`);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Users Directory</CardTitle>
            <CardDescription>
              Manage user accounts and wallet transactions
            </CardDescription>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full sm:w-80"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">User</TableHead>
                <TableHead className="font-semibold">Contact</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Wallet</TableHead>
                <TableHead className="font-semibold">Last Updated</TableHead>
                <TableHead className="font-semibold text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user._id}
                  className={cn("hover:bg-muted/50 transition-colors", {
                    hidden: user._id === userMe._id,
                  })}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                          {getUserInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">
                          {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.role}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{user.phone}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getUserStatusVariant(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-2">
                      {userMe.role === userRole.admin && (
                        <span className="flex gap-2 items-center">
                          <Wallet className="h-4 w-4 text-muted-foreground" />
                          <span className="font-semibold text-foreground">
                            {formatCurrency(user.wallet.balance)}
                          </span>
                        </span>
                      )}
                      <span>{user.wallet._id}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">
                        {format(user.updatedAt, "PP")}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    {userMe.role !== userRole.admin && (
                      <Button
                        onClick={() => handleSend(user.role, user.wallet._id)}
                        variant={"outline"}
                      >
                        <Send />
                      </Button>
                    )}
                    {userMe.role === userRole.admin && (
                      <Button variant={"outline"}>
                        <Eye />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
