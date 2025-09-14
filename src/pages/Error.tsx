import { useRouteError, isRouteErrorResponse } from "react-router";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { BiError } from "react-icons/bi";
import errorImg from "@/assets/images/error.svg";

export default function Error() {
  const error = useRouteError();

  let title = "Unexpected Error";
  let message = "Something went wrong.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = error.data || "The page you're looking for doesn't exist.";
  } else {
    message = "Something went wrong.";
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-muted">
      <img src={errorImg} alt="Error Illustration" className="max-w-md mb-6" />

      <Alert variant="destructive" className="max-w-md text-left">
        <BiError className="h-5 w-5 text-red-500" />
        <AlertTitle className="text-lg font-semibold">{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>

      <Button onClick={() => (window.location.href = "/")} className="mt-6">
        Go to Home
      </Button>
    </div>
  );
}
