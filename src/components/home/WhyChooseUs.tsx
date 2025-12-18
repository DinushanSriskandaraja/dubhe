import { Shield, Package, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Industry Supplier",
    description: "Over 25 years of experience serving construction, agricultural, and industrial sectors."
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description: "Access to 3,000+ products from leading manufacturers worldwide."
  },
  {
    icon: Award,
    title: "Quality & Durability",
    description: "Every product meets strict quality standards for reliable performance."
  },
  {
    icon: Headphones,
    title: "Professional Support",
    description: "Expert technical support and after-sales service available 24/7."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Dubhe
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're committed to providing the best tools and equipment for your business needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
