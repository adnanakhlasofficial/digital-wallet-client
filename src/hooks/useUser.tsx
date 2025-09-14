import { useUserMeQuery } from "@/redux/features/auth/auth.api";

export default function useUser() {
  const { data, isLoading, isError, error } = useUserMeQuery(undefined);

  if (isLoading) {
    return { loading: isLoading };
  }
  if (isError) {
    return { error };
  }

  const user = data?.data;
  console.log(user);

  return user;
}
