import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";
import type { IWallet } from "@/types";
import { formatCurrency } from "@/utils/format-currency";
import { getStatusColor, getUserRoleVariant } from "@/utils/status-functions";
import WalletAlertDialog from "./WalletAlertDialog";

export default function WalletTable() {
  const { data } = useGetAllWalletsQuery(undefined);

  const wallets = data?.data as IWallet[];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Management</CardTitle>
        <CardDescription>
          Manage and monitor all user wallets and their balances
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Balance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wallets.map((wallet) => (
                <TableRow key={wallet._id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="font-medium">{wallet.user.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      Wallet ID: {wallet._id.slice(0, 6)}...
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {wallet.user.phone}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getUserRoleVariant(wallet.user.role)}>
                      {wallet.user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(wallet.balance)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={getStatusColor(wallet.status)}
                    >
                      {wallet.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <WalletAlertDialog
                      status={wallet.status}
                      userName={wallet.user.name}
                      wallet_id={wallet._id}
                    />
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
