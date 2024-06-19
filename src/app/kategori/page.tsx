import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Kategori from "@/components/Pages/Kategori/page";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const CategoryPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Kategori />
    </DefaultLayout>
  );
};

export default CategoryPage;
