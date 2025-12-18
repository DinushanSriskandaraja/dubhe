import { Layout } from "@/components/layout/Layout";
import { Shield, Users, Award, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years Experience", value: "25+" },
  { label: "Products", value: "3,000+" },
  { label: "Happy Customers", value: "10,000+" },
  { label: "Countries Served", value: "15+" },
];

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We source only the highest quality tools and equipment from trusted manufacturers worldwide."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We provide expert guidance and support at every step."
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Decades of experience in industrial, construction, and agricultural equipment supply."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers across multiple countries with reliable logistics and support."
  }
];

const About = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="gradient-hero py-20 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl">
              About Dubhe
            </h1>
            <p className="text-lg text-primary-foreground/80">
              For over 25 years, Dubhe has been a trusted partner for industries worldwide, 
              providing reliable tools, equipment, and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Founded in 1995, Dubhe began as a small tool supply company with a simple mission: 
                to provide reliable, high-quality equipment to local construction and agricultural businesses.
              </p>
              <p>
                Over the decades, we've grown into a comprehensive industrial equipment supplier, 
                serving thousands of customers across multiple industries. Our catalog has expanded 
                to include over 3,000 products, from power tools and generators to specialized 
                construction and agricultural equipment.
              </p>
              <p>
                Today, Dubhe stands as a trusted name in the industry, known for our commitment 
                to quality, competitive pricing, and exceptional customer service. We continue 
                to adapt and grow, always keeping our customers' needs at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-xl bg-card p-6 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
