"use client";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks /useAuth";
import { cookies } from "next/headers";
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

  const {isAuth }=useAuth() 
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  async function login(e:React.FormEvent){
    e.preventDefault()
    try{
       const res=await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/apiv/login`, {
          method:"POST",
          headers: {
           "Content-Type": "application/json",
        
          },
          credentials:"include",
          body: JSON.stringify(credentials)
       })
       const data=await res.json()
       
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Welcome Back 👋</h1>
      <h3>We are happy to have you back</h3>
      <form onSubmit={login}>
        {["email", "password"].map((el) => (
          <Input
            className="text-black"
            key={el}
            onChange={handleOnChange}
            name={el}
            type={el}
            hasHide={el === "password"}
          />
        ))}
       <button type="submit">
        login
       </button>
      </form>
    </div>
  );
}
