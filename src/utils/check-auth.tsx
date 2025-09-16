import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export function checkAuth(Component: ComponentType, ...requiredRole: TRole[]) {
  return function AuthWrapper() {
    const { data, isLoading } = useUserMeQuery(undefined);

    if (!isLoading && !data?.data?.phone) {
      return <Navigate to="/login" />;
    }

    if (
      requiredRole &&
      !isLoading &&
      !requiredRole.includes(data?.data?.role)
    ) {
      return <Navigate to="/" />;
    }

    return <Component />;
  };
}
