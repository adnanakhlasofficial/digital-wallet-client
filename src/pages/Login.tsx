import loginBg from "@/assets/images/login-image.svg";
import LoginForm from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <Card className="overflow-hidden p-0 w-full max-w-4xl ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="p-6 md:p-8 flex flex-col gap-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-muted-foreground text-balance">
                Login to your Digital Wallet account
              </p>
            </div>

            {/* Form */}
            <LoginForm />
            <p className="text-center mx-auto flex gap-2 items-center">
              Don&apos;t have an account?{" "}
              <Button
                onClick={() => navigate("/register")}
                className="p-0 font-medium"
                type="button"
                variant={"link"}
              >
                Register
              </Button>
            </p>
          </div>

          <div className="border-l relative hidden md:block">
            <img
              src={loginBg}
              alt="Image"
              className="absolute inset-0 h-full w-full object-fit"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
