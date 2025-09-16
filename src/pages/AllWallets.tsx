import WalletSkeleton from "@/components/modules/Wallets/WalletSkeleton";
import WalletStatistics from "@/components/modules/Wallets/WalletStatistics";
import WalletTable from "@/components/modules/Wallets/WalletTable";
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";

export default function AllWallets() {
  const { isLoading } = useGetAllWalletsQuery(undefined);

  if (isLoading) return <WalletSkeleton />;

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <WalletStatistics />

      {/* Wallets Table */}
      <WalletTable />
    </div>
  );
}
