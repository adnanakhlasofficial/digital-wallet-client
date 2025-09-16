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
  useActivateWalletMutation,
  useBlockWalletMutation,
} from "@/redux/features/wallet/wallet.api";
import { Eye, Lock, Unlock } from "lucide-react";
import { toast } from "sonner";

interface IProps {
  status: string;
  userName: string;
  wallet_id: string;
}

export default function WalletAlertDialog({
  status,
  userName,
  wallet_id,
}: IProps) {
  const [activate] = useActivateWalletMutation();
  const [block] = useBlockWalletMutation();

  async function handleWalletActive() {
    const toastId = toast.loading("Wallet activating...");
    try {
      const res = await activate(wallet_id).unwrap();
      toast.success("Wallet activated successfully.", { id: toastId });
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  }

  async function handleWalletBlock() {
    const toastId = toast.loading("Wallet blocking...");
    try {
      const res = await block(wallet_id).unwrap();
      toast.success("Wallet blocked successfully.", { id: toastId });
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {status === "ACTIVE" ? (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <Lock className="h-3 w-3" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deactivate Wallet</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to Block{" "}
                <span className="font-semibold">{userName}'s</span> wallet? This
                will prevent them from making transactions.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleWalletBlock}
                className="bg-red-600 hover:bg-red-700"
              >
                Block
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950"
            >
              <Unlock className="h-3 w-3" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Activate Wallet</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to activate{" "}
                <span className="font-semibold">{userName}'s</span> wallet? This
                will allow them to make transactions.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleWalletActive}
                className="bg-green-600 hover:bg-green-700"
              >
                Activate
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
