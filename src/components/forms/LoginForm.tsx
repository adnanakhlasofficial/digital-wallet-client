import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Password from "@/components/ui/Password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router";

export const phoneRegex = /^01[3-9]\d{8}$/;

const formSchema = z.object({
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Phone number is required" })
    .regex(/^\d+$/, { message: "Only numeric characters are allowed" })
    .regex(phoneRegex, {
      message: "Invalid Bangladeshi phone number. Format: 01XXXXXXXXX",
    }),
  password: z.string().trim().nonempty({ message: "Password is required" }),
});

export default function LoginForm() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [login] = useLoginMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  function setUserCredential() {
    form.setValue("phone", "01812345678");
    form.setValue("password", "admin@digital-wallet.com");
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const toastId = toast.loading("Logging In...");
    try {
      const res = await login(values).unwrap();
      toast.success("Login success", { id: toastId });
      console.log(res);
      navigate(state || "/");
    } catch (error) {
      toast.error("Failed to login");
      console.error(error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-4 my-0"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Phone <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="01398765432" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Password {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4">Login</Button>
          <Separator />
          <Button
            onClick={() => setUserCredential()}
            type="submit"
            variant={"outline"}
          >
            Login as Admin
          </Button>
        </form>
      </Form>
    </>
  );
}
