import UserSkeleton from "@/components/modules/Users/UserSkeleton";
import UserStats from "@/components/modules/Users/UserStats";
import UserTable from "@/components/modules/Users/UserTable";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";

function AllUsers() {
  const { isLoading } = useGetAllUsersQuery(undefined);

  if (isLoading) return <UserSkeleton />;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <UserStats />

      {/* Users Table */}
      <UserTable />
    </div>
  );
}

export default AllUsers;
