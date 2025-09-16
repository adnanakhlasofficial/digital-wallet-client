import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-background bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="w-fit">
              <Star className="w-3 h-3 mr-1" />
              Trusted by 2M+ users
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Banking Made
              <span className="block text-primary">Simple & Secure</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-md">
              Send money, pay bills, and manage your finances instantly with our
              award-winning mobile banking app.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download App
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              Bank-grade security
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              Instant transfers
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              24/7 support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
