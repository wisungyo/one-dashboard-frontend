import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SigninContent from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Admin | Login",
  description: "One Admin Halaman Login",
};

const SignIn = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Masuk" />
      <SigninContent />
    </DefaultLayout>
  );
};

export default SignIn;
