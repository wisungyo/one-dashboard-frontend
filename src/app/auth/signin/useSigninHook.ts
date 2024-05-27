"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiAuthSignin } from "@/api/auth";

export const useSigninHook = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (event: any) => {
    event.preventDefault();

    const response = await apiAuthSignin(email, password);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      setErrorMessage("");
      setLoading(false);
      window.location.href = "/";
    } else {
      const data = await response.json();
      console.error(data);
      setEmail("");
      setPassword("");
      setErrorMessage(data.message);
      setLoading(false);
    }
  };

  return {
    email,
    loading,
    password,
    errorMessage,
    setEmail,
    setPassword,
    handleSignIn,
  };
};
