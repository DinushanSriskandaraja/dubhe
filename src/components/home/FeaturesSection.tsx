import { 
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
    description: "Reliable nationwide shipping with express options. Same-day dispatch and real-time tracking."
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Professional maintenance and repair services with genuine spare parts and warranty coverage."
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Safety training, operation guides, and certification programs for your team."
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "24/7 expert assistance via phone, live chat, and email for all your needs."
  },
  {
    icon: ClipboardCheck,
    title: "Consultation Services",
    description: "Expert advice on selecting the right equipment for your specific project requirements."
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranty",
    description: "Comprehensive warranty programs with coverage extensions and priority service."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Beyond quality products, we offer comprehensive services to support your operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
