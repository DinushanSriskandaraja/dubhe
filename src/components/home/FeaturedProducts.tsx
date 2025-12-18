import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Discover our most popular tools and equipment
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.slice(0, 8).map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
