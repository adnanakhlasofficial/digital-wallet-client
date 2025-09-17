import SendMoneyForm from "@/components/forms/SendMoneyForm";

export default function sendMoney() {
  return (
    <div className="bg-background flex min-h-full flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SendMoneyForm />
      </div>
    </div>
  );
}
