"use client";

import { Suspense } from "react";
import ProductsSection from "../sections/ProductsSection";

function ProductsSectionContent() {
  return <ProductsSection />;
}

export default function ProductsSectionWrapper() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsSectionContent />
    </Suspense>
  );
}
