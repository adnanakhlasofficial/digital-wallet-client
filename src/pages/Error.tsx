// import { useRouteError, isRouteErrorResponse } from "react-router";
// import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
// import { Button } from "@/components/ui/button";
// import { BiError } from "react-icons/bi";
// import errorImg from "@/assets/images/error.svg";

// export default function Error() {
//   const error = useRouteError();

//   let title = "Unexpected Error";
//   let message = "Something went wrong.";

//   if (isRouteErrorResponse(error)) {
//     title = `${error.status} ${error.statusText}`;
//     message = error.data || "The page you're looking for doesn't exist.";
//   } else {
//     message = "Something went wrong.";
//   }

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-muted">
//       <img src={errorImg} alt="Error Illustration" className="max-w-md mb-6" />

//       <Alert variant="destructive" className="max-w-md text-left">
//         <BiError className="h-5 w-5 text-red-500" />
//         <AlertTitle className="text-lg font-semibold">{title}</AlertTitle>
//         <AlertDescription>{message}</AlertDescription>
//       </Alert>

//       <Button onClick={() => (window.location.href = "/")} className="mt-6">
//         Go to Home
//       </Button>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";

interface ErrorPageProps {
  errorCode?: string;
  title?: string;
  description?: string;
  showBackButton?: boolean;
  showRefreshButton?: boolean;
  showContactSupport?: boolean;
}

export default function Error({
  errorCode = "404",
  title = "Page Not Found",
  description = "The page you're looking for doesn't exist or has been moved.",
  showBackButton = true,
  showRefreshButton = true,
}: ErrorPageProps) {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Main Error Card */}
        <Card className="p-8 md:p-12 text-center space-y-8">
          {/* Error Icon and Code */}
          <div className="space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-destructive" />
            </div>

            <div className="space-y-2">
              <div className="text-6xl md:text-8xl font-bold text-muted-foreground/30">
                {errorCode}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                {title}
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGoHome} size="lg" className="px-6">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>

            {showBackButton && (
              <Button
                variant="outline"
                onClick={handleGoBack}
                size="lg"
                className="px-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            )}

            {showRefreshButton && (
              <Button
                variant="outline"
                onClick={handleRefresh}
                size="lg"
                className="px-6"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
