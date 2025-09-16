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
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import type { IUpdateUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";
import { useUpdateUserMutation } from "@/redux/features/user/user.api";

export const phoneRegex = /^01[3-9]\d{8}$/;

const formSchema = z
  .object({
    name: z.string().trim().nonempty({ message: "Name is required" }),
    password: z.string().trim().nonempty({ message: "Password is required" }),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password does not match",
  });

export default function UpdateUserForm() {
  const [updateUser] = useUpdateUserMutation();
  const { data } = useUserMeQuery(undefined);

  const { _id, name } = data?.data || {};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: name,
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Updating info...");
    const updateUserInfo: IUpdateUser = {
      _id,
      name: values.name,
      password: values.password,
    };

    if (values.newPassword && values.newPassword === values.confirmPassword) {
      updateUserInfo.newPassword = values.confirmPassword;
    }

    try {
      const res = await updateUser(updateUserInfo).unwrap();
      console.log(res);
      toast.success("Updated info successfully", { id: toastId });
    } catch (error) {
      toast.error("Something went wrong.", { id: toastId });
      console.error(error);
    }

    console.log(updateUserInfo);
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
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Password {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Password {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4 h-12">Update</Button>
        </form>
      </Form>
    </>
  );
}
