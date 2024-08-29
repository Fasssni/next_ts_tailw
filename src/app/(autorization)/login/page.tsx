"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
type LoginType = {
  email: string;
  password: string;
};
export default function Login() {
  const [credentials, setCredentials] = useState<LoginType>({
    email: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <h1>Welcome Back 👋</h1>
      <h3>We are happy to have you back</h3>
      <form>
        {["email", "password"].map((el) => (
          <Input
            key={el}
            onChange={handleOnChange}
            name={el}
            type={el}
            hasHide={el === "password"}
          />
        ))}
      </form>
    </div>
  );
}
