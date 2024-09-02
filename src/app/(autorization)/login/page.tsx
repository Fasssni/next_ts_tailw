"use client";
import LoginForm from "@/components/forms/LoginForm";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function Login() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[396px]">
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
