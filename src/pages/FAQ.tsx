import { useState } from "react";
import {
  Search,
  Shield,
  CreditCard,
  Smartphone,
  HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    category: "Account Management",
    icon: <Smartphone className="w-5 h-5" />,
    questions: [
      {
        id: "account-1",
        question: "How do I open a new mobile banking account?",
        answer:
          "To open a new mobile banking account, download our mobile app from the App Store or Google Play, tap 'Open Account,' and follow the step-by-step verification process. You'll need a valid ID, social security number, and initial deposit of $25.",
      },
      {
        id: "account-2",
        question: "Can I have multiple accounts linked to one mobile app?",
        answer:
          "Yes, you can link multiple accounts including checking, savings, credit cards, and loans to a single mobile banking profile. Use the 'Add Account' feature in settings to link additional accounts.",
      },
      {
        id: "account-3",
        question: "How do I update my personal information?",
        answer:
          "Go to Settings > Profile Information in your mobile app. You can update your address, phone number, and email. Some changes may require additional verification for security purposes.",
      },
      {
        id: "account-4",
        question: "What should I do if my account is locked?",
        answer:
          "If your account is locked due to multiple incorrect login attempts, wait 30 minutes and try again, or contact customer support at 1-800-BANK-HELP for immediate assistance.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        id: "security-1",
        question: "How secure is mobile banking?",
        answer:
          "Our mobile banking uses bank-level 256-bit SSL encryption, multi-factor authentication, and real-time fraud monitoring. Your data is protected with the same security standards as our physical branches.",
      },
      {
        id: "security-2",
        question: "What if I lose my phone?",
        answer:
          "Immediately call our 24/7 support line to temporarily suspend mobile access. You can also log into online banking from any device to disable mobile access. Once you get a new phone, simply reinstall the app and log in.",
      },
      {
        id: "security-3",
        question: "How do I set up biometric authentication?",
        answer:
          "In your app settings, go to Security > Biometric Login and follow the prompts to set up fingerprint or face recognition. This adds an extra layer of security to your account.",
      },
      {
        id: "security-4",
        question: "Are my transactions monitored for fraud?",
        answer:
          "Yes, we use advanced AI algorithms to monitor all transactions in real-time for suspicious activity. You'll receive immediate alerts for any unusual transactions, and we may temporarily block suspicious activity.",
      },
    ],
  },
  {
    category: "Payments & Transfers",
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        id: "payments-1",
        question: "How do I send money to friends and family?",
        answer:
          "Use our Send Money feature to transfer funds instantly to other bank customers using just their phone number or email. For external transfers, add their bank account details and transfers typically complete in 1-3 business days.",
      },
      {
        id: "payments-2",
        question: "What are the daily transfer limits?",
        answer:
          "Daily limits vary by account type: Standard accounts have a $2,500 daily limit, Premium accounts have $5,000, and Private Banking has $10,000. You can request limit increases through the app or by calling customer service.",
      },
      {
        id: "payments-3",
        question: "Can I schedule recurring payments?",
        answer:
          "Yes, you can set up recurring payments for bills, loan payments, and transfers. Go to Pay Bills > Schedule Payment and select your frequency options (weekly, monthly, quarterly, etc.).",
      },
      {
        id: "payments-4",
        question: "How do mobile check deposits work?",
        answer:
          "Use the Check Deposit feature to photograph both sides of your endorsed check. Funds are typically available within 1 business day for amounts under $200, and 2-3 business days for larger amounts.",
      },
    ],
  },
  {
    category: "Technical Support",
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        id: "technical-1",
        question: "What devices support the mobile banking app?",
        answer:
          "Our app supports iOS 12.0+ and Android 8.0+. It's optimized for smartphones and tablets, with full functionality across all supported devices.",
      },
      {
        id: "technical-2",
        question: "Why is my app running slowly?",
        answer:
          "Slow performance can be caused by low device storage, outdated app version, or poor internet connection. Try closing other apps, updating to the latest version, or switching to a stronger Wi-Fi connection.",
      },
      {
        id: "technical-3",
        question: "How do I update the mobile banking app?",
        answer:
          "Enable automatic updates in your device settings, or manually update through the App Store (iOS) or Google Play Store (Android). We recommend always using the latest version for optimal security and features.",
      },
      {
        id: "technical-4",
        question: "Can I use mobile banking while traveling abroad?",
        answer:
          "Yes, mobile banking works internationally with internet access. However, notify us of travel plans to prevent security blocks. Data charges may apply when not connected to Wi-Fi.",
      },
    ],
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        selectedCategory === "All" ||
        category.category === selectedCategory ||
        category.questions.length > 0
    );

  const categories = ["All", ...faqData.map((cat) => cat.category)];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-sidebar text-sidebar-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about mobile banking, security,
            payments, and account management.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* FAQ Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Categories Sidebar */}
          <aside className="lg:col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
                <CardDescription>Browse by topic</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {faqData.map((category) => (
                  <Button
                    key={category.category}
                    variant="ghost"
                    className="w-full justify-start h-auto p-3"
                    onClick={() => setSelectedCategory(category.category)}
                  >
                    <div className="p-1.5 rounded-lg mr-3 bg-muted">
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-sm">
                        {category.category}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {category.questions.length} questions
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </aside>

          {/* FAQ Items */}
          <div className="lg:col-span-9 space-y-6">
            {filteredFAQs.map(
              (category) =>
                category.questions.length > 0 && (
                  <Card key={category.category} className="shadow-sm">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-muted">
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {category.category}
                          </CardTitle>
                          <CardDescription>
                            {category.questions.length} question
                            {category.questions.length !== 1 ? "s" : ""}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq) => (
                          <AccordionItem key={faq.id} value={faq.id}>
                            <AccordionTrigger className="text-left py-4">
                              <span className="font-medium">
                                {faq.question}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                )
            )}

            {filteredFAQs.every(
              (category) => category.questions.length === 0
            ) && (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or browse by category
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Contact Support Section */}
      <section className="bg-sidebar text-sidebar-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Our customer support team is available 24/7 to assist you
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Chat with our support team
                </p>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  1-800-BANK-HELP
                </p>
                <Button variant="outline" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Visit Branch</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Find a location near you
                </p>
                <Button variant="outline" className="w-full">
                  Locate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
