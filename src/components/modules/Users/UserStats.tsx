import { Card, CardContent } from "@/components/ui/card";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import type { IUser } from "@/types";
import { formatCurrency } from "@/utils/format-currency";
import { Phone, Users, Wallet } from "lucide-react";
import UserSkeleton from "./UserSkeleton";

export default function UserStats() {
  const { data, isLoading } = useGetAllUsersQuery(undefined);

  if (isLoading) {
    return <UserSkeleton />;
  }
  const users = data?.data as IUser[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Users
              </p>
              <p className="text-2xl font-bold text-foreground">
                {users?.length}
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-full">
              <Users className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Active Users
              </p>
              <p className="text-2xl font-bold text-foreground">
                {users?.filter((u) => u.status === "ACTIVE")?.length}
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-full">
              <Phone className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Balance
              </p>
              <p className="text-2xl font-bold text-foreground">
                {formatCurrency(
                  users?.reduce((sum, user) => sum + user.wallet.balance, 0)
                )}
              </p>
            </div>
            <div className="p-3 bg-secondary rounded-full">
              <Wallet className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
