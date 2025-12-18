import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Package, Headphones } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent animate-fade-in">
            <Shield className="h-4 w-4" />
            Trusted Industry Supplier Since 1995
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Powering Industries with{" "}
            <span className="text-accent">Reliable Tools</span>{" "}
            & Equipment
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-lg text-primary-foreground/80 md:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Leading supplier of power tools, generators, construction & agricultural equipment. 
            Explore our collection of 3,000+ professional-grade products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Package className="h-5 w-5" />
              </div>
              <p className="mt-2 text-3xl font-bold text-primary-foreground">3,000+</p>
              <p className="text-sm text-primary-foreground/60">Products</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Shield className="h-5 w-5" />
              </div>
              <p className="mt-2 text-3xl font-bold text-primary-foreground">25+</p>
              <p className="text-sm text-primary-foreground/60">Years Experience</p>
            </div>
            <div className="col-span-2 text-center md:col-span-1">
              <div className="flex items-center justify-center gap-2 text-accent">
                <Headphones className="h-5 w-5" />
              </div>
              <p className="mt-2 text-3xl font-bold text-primary-foreground">24/7</p>
              <p className="text-sm text-primary-foreground/60">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="h-16 w-full" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 64H1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0V64Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
}
