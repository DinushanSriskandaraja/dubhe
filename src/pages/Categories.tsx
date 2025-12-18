import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { categories } from "@/data/products";
import { ArrowRight, ChevronRight } from "lucide-react";

const Categories = () => {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Categories</span>
          </nav>
        </div>
      </div>

      <div className="container py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">
            Product Categories
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our comprehensive range of industrial tools and equipment
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mb-4 text-muted-foreground">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {category.productCount}+ Products
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
