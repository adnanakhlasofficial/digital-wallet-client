import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSendMoneyMutation } from "@/redux/features/transaction/transaction.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";

export const phoneRegex = /^01[3-9]\d{8}$/;

const formSchema = z.object({
  amount: z.string().trim().nonempty({ message: "Amount is required" }),
  walletId: z.string().trim().nonempty({ message: "Wallet ID  is required" }),
});

export default function SendMoneyForm() {
  const { walletId } = useParams();
  const [sendMoney] = useSendMoneyMutation(undefined);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      amount: "",
      walletId: walletId,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Sending...");
    const transInfo = {
      amount: values.amount,
      to_wallet: walletId,
    };
    try {
      const res = await sendMoney(transInfo).unwrap();

      console.log(res);
      toast.success("Send Money requested", { id: toastId });
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
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
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Amount <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-12"
                    {...field}
                    placeholder="Enter amount"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="walletId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Wallet ID <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-12"
                    {...field}
                    disabled
                    placeholder="Enter receiver wallet id"
                    type="text"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4 h-12">Send</Button>
        </form>
      </Form>
    </>
  );
}
