import CashOutForm from "@/components/forms/CashOutForm";

export default function CashOut() {
  return (
    <div className="bg-background flex min-h-full flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <CashOutForm />
      </div>
    </div>
  );
}
