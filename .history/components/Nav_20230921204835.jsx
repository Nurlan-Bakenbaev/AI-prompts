"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
const Nav = () => {
  return (
    <nav className="flex flex-between w-full pt-3 z-10 ">
      <Link href="/" className="flex gap-2">
        <Image 
        src="/assets/images/logo.svg" 
        height={30} 
        width={30} />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* NAVIGATION */}

    </nav>
  );
};

export default Nav;
