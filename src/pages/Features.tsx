import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle,
  DollarSign,
  Eye,
  Fingerprint,
  Globe,
  Lock,
  PiggyBank,
  QrCode,
  RefreshCw,
  Shield,
  Smartphone,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description:
        "256-bit encryption and multi-factor authentication protect your financial data with military-grade security.",
      features: [
        "End-to-end encryption",
        "Biometric authentication",
        "Real-time fraud monitoring",
        "FDIC insured up to $250,000",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Transfers",
      description:
        "Send money instantly to friends, family, or businesses with zero fees and real-time processing.",
      features: [
        "Zero transfer fees",
        "Real-time processing",
        "International transfers",
        "Split bills with friends",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First Design",
      description:
        "Designed from the ground up for seamless mobile banking with an intuitive, award-winning interface.",
      features: [
        "Touch ID & Face ID",
        "Offline mode",
        "Dark mode support",
        "Accessibility features",
      ],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Smart Budgeting",
      description:
        "AI-powered insights help you track spending, categorize transactions, and reach your financial goals.",
      features: [
        "Automatic categorization",
        "Spending insights",
        "Goal tracking",
        "Custom budgets",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Access",
      description:
        "Bank anywhere in the world with 24/7 customer support and multi-currency capabilities.",
      features: [
        "150+ countries",
        "Multi-currency support",
        "24/7 support",
        "Global ATM network",
      ],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy Focused",
      description:
        "We never sell your data. Your financial privacy is our top priority with transparent practices.",
      features: [
        "No data selling",
        "Privacy controls",
        "Transparent policies",
        "Secure data storage",
      ],
    },
  ];

  const securityFeatures = [
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Authentication",
      description:
        "Login securely with Touch ID, Face ID, or voice recognition.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "256-bit Encryption",
      description:
        "Military-grade encryption protects all your data and transactions.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "AI-powered fraud detection monitors your account 24/7.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Vault",
      description:
        "Store sensitive documents and information in an encrypted vault.",
    },
  ];

  const bankingFeatures = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Digital Wallet",
      description:
        "Store cards, make payments, and manage loyalty programs in one place.",
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "QR Payments",
      description:
        "Pay instantly by scanning QR codes at millions of merchants.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Automatic Savings",
      description: "Round up purchases and automatically save spare change.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description:
        "Get intelligent alerts about spending, bills, and account activity.",
    },
  ];

  const investmentFeatures = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Commission-free Trading",
      description:
        "Trade stocks, ETFs, and crypto without paying commission fees.",
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: "Robo-advisor",
      description: "AI-powered investment recommendations based on your goals.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Portfolio Analytics",
      description:
        "Detailed insights and performance tracking for your investments.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fractional Shares",
      description: "Invest in expensive stocks with as little as $1.",
    },
  ];

  const comparisonFeatures = [
    {
      feature: "Monthly Fees",
      securebank: "Free",
      traditional: "$12-25",
      competitor: "$8-15",
    },
    {
      feature: "ATM Fees",
      securebank: "Free Worldwide",
      traditional: "$2-5 per use",
      competitor: "$1-3 per use",
    },
    {
      feature: "Transfer Speed",
      securebank: "Instant",
      traditional: "1-3 days",
      competitor: "Same day",
    },
    {
      feature: "Mobile App Rating",
      securebank: "4.9/5",
      traditional: "3.2/5",
      competitor: "4.1/5",
    },
    {
      feature: "Customer Support",
      securebank: "24/7 Chat & Phone",
      traditional: "Business hours",
      competitor: "Limited hours",
    },
    {
      feature: "International Transfers",
      securebank: "Free",
      traditional: "$15-45",
      competitor: "$5-25",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Award-winning features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Everything you need to manage your money
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover powerful features designed to simplify your financial life.
            From instant transfers to AI-powered insights, we've built the
            complete banking solution.
          </p>
          <Button size="lg" className="text-lg px-8">
            Start Banking Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge technology and designed around your
              financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into specific feature sets designed for different
              aspects of your financial life.
            </p>
          </div>

          <Tabs defaultValue="security" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="banking">Banking</TabsTrigger>
              <TabsTrigger value="investing">Investing</TabsTrigger>
            </TabsList>

            <TabsContent value="security" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Bank-Level Security</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Your security is our top priority. We use the same security
                  measures as major banks to protect your money and personal
                  information.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="banking" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Smart Banking Tools</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Modern banking features that make managing your money easier,
                  faster, and more convenient than ever before.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {bankingFeatures.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="investing" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Investment Platform</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Build wealth with our comprehensive investment tools. From
                  beginner-friendly options to advanced trading features.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {investmentFeatures.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Compare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how SecureBank stacks up against traditional banks and other
              digital banking solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden rounded-md border p-10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-primary">
                        SecureBank
                      </th>
                      <th className="text-center p-4 font-semibold">
                        Traditional Banks
                      </th>
                      <th className="text-center p-4 font-semibold">
                        Competitors
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          <Badge
                            variant="default"
                            className="bg-primary text-primary-foreground"
                          >
                            {row.securebank}
                          </Badge>
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {row.traditional}
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {row.competitor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
