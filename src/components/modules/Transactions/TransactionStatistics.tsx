import { useAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";

import { formatCurrency } from "@/utils/format-currency";
import { Clock, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ITransaction } from "@/types";

export default function TransactionStatistics() {
  const { data } = useAllTransactionsQuery({});

  const transactions = data?.data;

  const totalTransactions = transactions?.length || 0;
  const totalAmount = transactions.reduce(
    (sum: number, tx: ITransaction) => sum + tx.amount,
    0
  );
  const completedTransactions =
    transactions.filter((tx: ITransaction) => tx.status === "COMPLETED")
      ?.length || 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Transactions
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTransactions}</div>
          <p className="text-xs text-muted-foreground">
            {completedTransactions} completed
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(totalAmount)}
          </div>
          <p className="text-xs text-muted-foreground">
            Across all transactions
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round((completedTransactions / totalTransactions) * 100)}%
          </div>
          <p className="text-xs text-muted-foreground">Success rate</p>
        </CardContent>
      </Card>
    </div>
  );
}
