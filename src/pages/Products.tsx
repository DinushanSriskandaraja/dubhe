import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, X, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { products, categories } from "@/data/products";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category") ? [searchParams.get("category")!] : []
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategories]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSearchParams({});
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Search Products
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Categories */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-medium text-foreground">Categories</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-3">
              <Checkbox
                id={category.id}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <label
                htmlFor={category.id}
                className="flex-1 cursor-pointer text-sm text-muted-foreground hover:text-foreground"
              >
                {category.name}
                <span className="ml-1 text-xs">({category.productCount})</span>
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Clear Filters */}
      {(searchQuery || selectedCategories.length > 0) && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          <X className="mr-2 h-4 w-4" />
          Clear Filters
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container py-4">
          <nav className="text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">Products</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground">
              All Products
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 shrink-0 md:block">
            <div className="sticky top-24 rounded-xl bg-card p-6 shadow-card">
              <FilterSidebar />
            </div>
          </aside>

          {/* Mobile Sidebar */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
              <div className="fixed inset-y-0 left-0 w-80 bg-card p-6 shadow-elevated animate-slide-in-right">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-heading text-lg font-semibold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Package className="mb-4 h-16 w-16 text-muted-foreground/50" />
                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                  No products found
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Need to import Package icon for empty state
import { Package } from "lucide-react";

export default Products;
