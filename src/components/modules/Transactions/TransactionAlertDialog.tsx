import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  useApproveTransactionMutation,
  useReverseTransactionMutation,
} from "@/redux/features/transaction/transaction.api";
import { formatCurrency } from "@/utils/format-currency";
import { Check, Eye, X } from "lucide-react";
import { toast } from "sonner";

interface IProps {
  status: string;
  transaction_id: string;
  amount: number;
}

export default function TransactionAlertDialog({
  status,
  transaction_id,
  amount,
}: IProps) {
  const [approve] = useApproveTransactionMutation();
  const [reverse] = useReverseTransactionMutation();

  async function handleApprove() {
    const toastId = toast.loading("Approving...");

    try {
      const res = await approve(transaction_id).unwrap();
      console.log(res);
      toast.success("Transaction approved successfully", { id: toastId });
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  }

  async function handleReject() {
    const toastId = toast.loading("Rejecting...");

    try {
      const res = await reverse(transaction_id).unwrap();
      console.log(res);
      toast.success("Transaction rejected successfully", { id: toastId });
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              disabled={status !== "PENDING"}
              variant="outline"
              size="sm"
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <Check className="h-3 w-3" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Approve Transaction</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to approve this transaction of{" "}
                <span className="font-semibold">{formatCurrency(amount)}</span>?
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleApprove}
                className="bg-green-600 hover:bg-green-700"
              >
                Approve
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              disabled={status !== "PENDING"}
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <X className="h-3 w-3" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Reject Transaction</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to reject this transaction of{" "}
                <span className="font-semibold">{formatCurrency(amount)}</span>?
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleReject}
                className="bg-red-600 hover:bg-red-700"
              >
                Reject
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
