import React from "react";
import { collectionsData } from "@/data/products-data";
import ProductDetailClient from "./ProductDetailClient.jsx";
import ProductNotFound from "./ProductNotFound.jsx";

// Generate all products, ensuring uniqueness by ID
const allProducts = collectionsData
  .flatMap((collection) =>
    collection.subcategories.flatMap((sub) => sub.products)
  )
  .reduce((unique, product) => {
    const exists = unique.find((p) => p.id === product.id);
    if (!exists) {
      unique.push(product);
    }
    return unique;
  }, [])
  .map((p) => ({
    ...p,
    // Ensure fields used in components are present
    indexImage: p.indexImage,
  }));

// Server Component: ProductDetailPage
export default async function ProductDetailPage({ params }) {
  // Await params to ensure it's resolved
  const { slug } = await params;

  // Normalize slug for comparison
  const normalizedSlug = slug?.toLowerCase().replace(/^\//, "") || "";
  const product = allProducts.find(
    (p) => p.slug.replace(/^\//, "").toLowerCase() === normalizedSlug
  );

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen bg-white mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <ProductDetailClient product={product} />
      </div>
    </div>
  );
}

// Generate static parameters for SSG
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug.replace(/^\//, "").toLowerCase(),
  }));
}
