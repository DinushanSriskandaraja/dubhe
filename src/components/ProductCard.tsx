import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <Badge 
          className="absolute left-3 top-3 bg-primary/90 text-primary-foreground"
        >
          {product.subcategory}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
        <Button asChild variant="outline" className="w-full group/btn">
          <Link to={`/product/${product.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
