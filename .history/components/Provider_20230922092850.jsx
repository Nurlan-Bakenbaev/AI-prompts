"use client";
import { SessionProvider } from "next-auth/react";
import { Children } from "react";

const Provider = ({children,session})=>{
  return (
    <SessionProvider session={se}>{Children}</SessionProvider>
  )
}

export default Provider;
