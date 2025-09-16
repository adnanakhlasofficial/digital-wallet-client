import TransactionSkeleton from "@/components/modules/Transactions/TransactionSkeleton";
import TransactionStatistics from "@/components/modules/Transactions/TransactionStatistics";
import TransactionTable from "@/components/modules/Transactions/TransactionTable";
import { useAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function AllTransactions() {
  const { isLoading } = useAllTransactionsQuery({});

  if (isLoading) return <TransactionSkeleton />;

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <TransactionStatistics />

      {/* Transactions Table */}
      <TransactionTable />
    </div>
  );
}
