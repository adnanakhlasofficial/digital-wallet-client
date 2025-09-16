import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    console.log(data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Show success toast
    toast.success("Message sent successfully!", {
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    reset();
    setIsSubmitting(false);
  };

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
