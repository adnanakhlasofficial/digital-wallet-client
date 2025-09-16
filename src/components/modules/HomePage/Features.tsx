import { Card } from "@/components/ui/card";
import { BarChart3, CreditCard, Send, Shield, Zap } from "lucide-react";

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Send className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Instant Send</h3>
          <p className="text-sm text-muted-foreground">
            Send money to anyone, anywhere in seconds
          </p>
        </div>
      </Card>

      <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Secure</h3>
          <p className="text-sm text-muted-foreground">
            Military-grade encryption protects your data
          </p>
        </div>
      </Card>

      <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Smart Cards</h3>
          <p className="text-sm text-muted-foreground">
            Virtual and physical cards for every need
          </p>
        </div>
      </Card>

      <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Zap className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Lightning Fast</h3>
          <p className="text-sm text-muted-foreground">
            Transactions complete in under 3 seconds
          </p>
        </div>
      </Card>

      <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Shield className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Bank-Level Security</h3>
          <p className="text-sm text-muted-foreground">
            Your money and data are protected with military-grade encryption
          </p>
        </div>
      </Card>

      <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Expense Tracking</h3>
          <p className="text-sm text-muted-foreground">
            Detailed insights and analytics to help you manage your spending
          </p>
        </div>
      </Card>
    </div>
  );
}
