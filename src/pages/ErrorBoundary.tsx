import { isRouteErrorResponse, useRouteError } from "react-router";
import Error from "./Error";

export function ErrorBoundary() {
  const error = useRouteError();

  // Handle different types of errors
  if (isRouteErrorResponse(error)) {
    // Router-specific errors (404, etc.)
    return (
      <Error
        errorCode={error.status.toString()}
        title={error.statusText || "Page Not Found"}
        description={
          error.status === 404
            ? "The page you're looking for doesn't exist or has been moved."
            : error.data?.message ||
              "An error occurred while loading this page."
        }
      />
    );
  }

  // JavaScript errors
  if (error instanceof Error) {
    return (
      <Error
        errorCode="500"
        title="Something went wrong"
        description={
          process.env.NODE_ENV === "development"
            ? error.message
            : "An unexpected error occurred. Please try refreshing the page."
        }
        showBackButton={true}
        showRefreshButton={true}
        showContactSupport={true}
      />
    );
  }

  // Fallback for unknown errors
  return (
    <Error
      errorCode="500"
      title="Unexpected Error"
      description="An unexpected error occurred. Please try refreshing the page."
    />
  );
}
