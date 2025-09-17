import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  useCashInMutation,
  useCashOutMutation,
  useSendMoneyMutation,
} from "@/redux/features/transaction/transaction.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";

export const phoneRegex = /^01[3-9]\d{8}$/;

const formSchema = z.object({
  amount: z.string().trim().nonempty({ message: "Amount is required" }),
  walletId: z.string().trim().nonempty({ message: "Wallet ID  is required" }),
});

export default function TransactionForm() {
  const { walletId } = useParams();
  const { pathname } = useLocation();
  const [sendMoney] = useSendMoneyMutation(undefined);
  const [cashOut] = useCashOutMutation(undefined);
  const [cashIn] = useCashInMutation(undefined);

  const path = pathname.split("/")[2];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      amount: "",
      walletId: walletId,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(values);
    let res;
    const toastId = toast.loading("Logging In...");
    const transInfo = {
      amount: values.amount,
      to_wallet: walletId,
    };
    try {
      if (path === "send-money") {
        res = await sendMoney(transInfo).unwrap();
      } else if (path === "cash-out") {
        res = await cashOut(transInfo).unwrap();
      } else if (path === "cash-in") {
        res = await cashIn(transInfo).unwrap();
      }
      console.log(res);
      toast.success("Send money requested", { id: toastId });
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
