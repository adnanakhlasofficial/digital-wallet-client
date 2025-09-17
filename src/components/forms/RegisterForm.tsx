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
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { userRole } from "@/constants/user-role";
import { useNavigate } from "react-router";

export const phoneRegex = /^01[3-9]\d{8}$/;

const formSchema = z.object({
  name: z.string().trim().nonempty({ message: "Name is required" }),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Phone number is required" })
    .length(11, { message: "Number length must be 11 digits" })
    .regex(/^\d+$/, { message: "Only numeric characters are allowed" })
    .regex(phoneRegex, {
      message: "Invalid Bangladeshi phone number. Format: 01XXXXXXXXX",
    }),
  role: z.string(),
  password: z.string().trim().nonempty({ message: "Password is required" }),
});

export default function RegisterForm() {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      role: userRole.user || "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Registering...");
    try {
      await register(values);
      toast.success("Register success", { id: toastId });
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong.", { id: toastId });
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-12"
                    {...field}
                    placeholder="John Doe"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Phone <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-12"
                    {...field}
                    placeholder="01398765432"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={userRole.agent}>
                      {userRole.agent}
                    </SelectItem>
                    <SelectItem value={userRole.user}>
                      {userRole.user}
                    </SelectItem>
                  </SelectContent>
                </Select>
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
          <Button className="mt-4 h-12">Create Account</Button>
        </form>
      </Form>
    </>
  );
}
