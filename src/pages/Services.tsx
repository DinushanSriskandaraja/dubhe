import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Truck, 
  Wrench, 
  GraduationCap, 
  Headphones,
  ClipboardCheck,
  ShieldCheck
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Reliable nationwide shipping with express options available. Track your orders in real-time.",
    features: ["Same-day dispatch", "Express shipping", "Order tracking", "Bulk delivery options"]
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Keep your tools in top condition with our professional maintenance and repair services.",
    features: ["Preventive maintenance", "On-site repairs", "Genuine spare parts", "Warranty service"]
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Learn how to safely and effectively operate your equipment with our training programs.",
    features: ["Safety training", "Operation guides", "Best practices", "Certification programs"]
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "24/7 expert assistance for all your product-related queries and troubleshooting needs.",
    features: ["Phone support", "Live chat", "Email assistance", "Remote diagnostics"]
  },
  {
    icon: ClipboardCheck,
    title: "Consultation Services",
    description: "Get expert advice on selecting the right equipment for your specific project requirements.",
    features: ["Needs assessment", "Product recommendations", "Cost analysis", "Project planning"]
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description: "Protect your investment with our comprehensive extended warranty programs.",
    features: ["Coverage extensions", "Accidental damage", "Priority service", "Replacement guarantee"]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="gradient-hero py-20 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
              Our Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Beyond quality products, we offer comprehensive services to support 
              your operations from purchase to long-term use.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-xl bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">
              Need Assistance?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Our team is ready to help you find the right solutions for your business needs.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
