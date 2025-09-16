import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";
import type { IWallet } from "@/types";
import { formatCurrency } from "@/utils/format-currency";
import { DollarSign, Users, Wallet } from "lucide-react";

export default function WalletStatistics() {
  const { data } = useGetAllWalletsQuery(undefined);

  const wallets = data?.data as IWallet[];

  const totalWallets = wallets.length;
  const totalBalance = wallets.reduce((sum, wallet) => sum + wallet.balance, 0);
  const activeWallets = wallets.filter(
    (wallet) => wallet.status === "ACTIVE"
  ).length;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Wallets</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalWallets}</div>
          <p className="text-xs text-muted-foreground">
            {activeWallets} active wallets
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(totalBalance)}
          </div>
          <p className="text-xs text-muted-foreground">Across all wallets</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Rate</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round((activeWallets / totalWallets) * 100)}%
          </div>
          <p className="text-xs text-muted-foreground">Wallet activity rate</p>
        </CardContent>
      </Card>
    </div>
  );
}
