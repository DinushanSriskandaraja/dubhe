import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Browse by Category
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our comprehensive range of industrial tools and equipment organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-bold text-card">
                    {category.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-sm text-card/80">{category.productCount}+ Products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
