"use client";
import { SessionProvider } from "next-auth/react";
import { Children } from "react";

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{Children}</SessionProvider>;
};

export default Provider;
