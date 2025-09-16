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
import { useAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import type { ITransaction } from "@/types";
import { formatCurrency } from "@/utils/format-currency";
import { getTransactionStatusColor } from "@/utils/status-functions";
import { format } from "date-fns";
import TransactionAlertDialog from "./TransactionAlertDialog";

export default function TransactionTable() {
  const { data } = useAllTransactionsQuery({});

  const transactions: ITransaction[] = data?.data;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Management</CardTitle>
        <CardDescription>
          Manage and review all financial transactions in the system
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Fee</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction._id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">
                    {transaction.transaction_id}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">
                        {transaction.from_wallet.user?.name || "Unknown"}
                      </div>
                      {transaction.from_wallet.user && (
                        <div className="text-xs text-muted-foreground">
                          {transaction.from_wallet.user.phone}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium">
                        {transaction.to_wallet.user?.name || "Unknown"}
                      </div>
                      {transaction.to_wallet.user && (
                        <div className="text-xs text-muted-foreground">
                          {transaction.to_wallet.user.phone}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(transaction.amount)}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {formatCurrency(transaction.fee)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={getTransactionStatusColor(transaction.status)}
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(transaction.createdAt, "PP")}
                  </TableCell>
                  <TableCell>
                    <TransactionAlertDialog
                      amount={transaction.amount}
                      status={transaction.status}
                      transaction_id={transaction._id}
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
