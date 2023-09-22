"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
const Nav = () => {
  const isUserlogedIn = true;
  const [toggeMenu, setToggleMenu] = useState(false);

  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setProviders = async () => {
      const responce = await getProviders();
      setProviders(responce);
    };
    setProviders();
  }, []);

  return (
    <nav className="flex flex-between w-full pt-3 px-10 z-10 ">
      <Link href="/" className="flex gap-2">
        <Image src="/assets/images/logo.svg" height={30} width={30} />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* NAVIGATION */}

      {isUserlogedIn ? (
        <div className=" hidden md:flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn ">
            Create Post
          </Link>
          <button type="button" onClick={signOut} className="outline_btn">
            Sign Out
          </button>
          <Link href="/profile">
            <Image
              className="border"
              src="/assets/icons/loader.svg"
              width={37}
              height={37}
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((privider) => (
              <button
                type="button"
                key={providers.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
        </>
      )}
      {/* Mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserlogedIn ? (
          <div className="flex">
            <Image
              className="border"
              src="/assets/icons/loader.svg"
              width={37}
              height={37}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((privider) => (
                <button
                  type="button"
                  key={providers.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
