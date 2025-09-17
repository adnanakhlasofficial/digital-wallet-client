import ContactForm from "@/components/forms/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold  leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center">
                <Mail className="text-primary w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground">Email</h3>
                <p className="">hello@digital-wallet.com</p>
                <p className="">support@digital-wallet.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center">
                <Phone className="text-primary w-8 h-8 " />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground">Phone</h3>
                <p className="">(+880) 1341 34567</p>
                <p className="">(+880) 1641 54321</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground">Office</h3>
                <p className="">123 Business Street</p>
                <p className="">San Francisco, CA 94102</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm rounded-2xl p-6 border border-muted-foreground">
            <h3 className="font-semibold mb-2 text-muted-foreground">
              Business Hours
            </h3>
            <div className="space-y-1 text-sm ">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-primary font-medium">
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-primary font-medium">
                  10:00 AM - 4:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-destructive font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="shadow-2xl border-0 backdrop-blur-sm">
          <CardHeader className="space-y-2 pb-6">
            <CardTitle className="text-2xl font-bold ">
              Send us a Message
            </CardTitle>
            <CardDescription className="">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
