import registerBg from "@/assets/images/register.svg";
import RegisterForm from "@/components/forms/RegisterForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <Card className="overflow-hidden p-0 w-full max-w-4xl ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="border-r relative hidden md:block">
            <img
              src={registerBg}
              alt="Image"
              className="absolute inset-0 h-full w-full object-fit"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col gap-4">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Create Your Account</h1>
              <p className="text-muted-foreground text-balance">
                Start your secure journey today
              </p>
            </div>

            {/* Form */}
            <RegisterForm />
            <p className="text-center mx-auto flex gap-2 items-center">
              Already have an account{" "}
              <Button
                onClick={() => navigate("/login")}
                className="p-0 font-medium"
                type="button"
                variant={"link"}
              >
                Login
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
