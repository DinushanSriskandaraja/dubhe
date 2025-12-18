import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Industrial Avenue", "Business District, 10001"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@dubhe.com", "sales@dubhe.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"]
  }
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Contact</span>
          </nav>
        </div>
      </div>

      <div className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions about our products or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
              Get in Touch
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="rounded-xl bg-card p-6 shadow-card"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{info.title}</h3>
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-card p-8 shadow-card">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input placeholder="John" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input placeholder="Doe" required />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input placeholder="Product inquiry" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
