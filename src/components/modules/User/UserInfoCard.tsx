import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { formatCurrency } from "@/utils/format-currency";
import { getUserInitials } from "@/utils/get-user-initials";
import {
  getUserRoleVariant,
  getUserStatusVariant,
  getWalletStatusVariant,
} from "@/utils/status-functions";
import { format } from "date-fns";
import {
  Calendar,
  CheckCircle,
  Clock,
  Phone,
  Shield,
  Wallet,
} from "lucide-react";

export default function UserInfoCard() {
  const { data, isLoading } = useUserMeQuery(undefined);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const userData = data?.data;

  return (
    <Card className="w-full max-w-xl shadow-lg">
      <CardHeader className="">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-xl font-bold backdrop-blur-sm bg-popover-foreground text-popover">
              {getUserInitials(userData?.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{userData?.name}</h2>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant={getUserRoleVariant(userData?.role)}>
                <Shield className="w-3 h-3 mr-1" />
                {userData?.role}
              </Badge>
              <Badge variant={getUserStatusVariant(userData?.status)}>
                <CheckCircle className="w-3 h-3 mr-1" />
                {userData?.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Phone</span>
            </div>
            <span className="font-semibold">{userData?.phone}</span>
          </div>
        </div>

        <Separator />

        {/* Wallet Section */}
        <Card className="">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Wallet className="w-5 h-5 " />
                <span className="font-medium ">Wallet</span>
              </div>
              <Badge
                variant={getWalletStatusVariant(userData?.wallet?.status)}
                className="text-xs"
              >
                {userData?.wallet?.status}
              </Badge>
            </div>
            <div className="text-3xl font-bold  mb-1">
              {formatCurrency(userData?.wallet?.balance)}
            </div>
            <p className="text-xs text-muted-foreground">Available Balance</p>
          </CardContent>
        </Card>

        <Separator />

        {/* Timestamps */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Created</span>
            </div>
            <span className="text-sm font-medium">
              {format(userData?.createdAt, "PP")} {"at"}{" "}
              {format(userData?.createdAt, "p")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Last Updated</span>
            </div>
            <span className="text-sm font-medium">
              {format(userData?.updatedAt, "PP")} {"at"}{" "}
              {format(userData?.updatedAt, "p")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
