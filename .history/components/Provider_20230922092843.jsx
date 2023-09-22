"use client";
import { SessionProvider } from "next-auth/react";
import { Children } from "react";

const Provider = ({children,session})=>{
  return (
    <SessionProvider>{Children}</SessionProvider>
  )
}

export default Provider;
