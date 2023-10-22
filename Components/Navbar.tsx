"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const backToHome = () => {
    window.location.href = "/";
  };
  const getFirstRoute = () => {
    const pathnames = pathname.substring(1);
    let finalStr = "";
    for (let i = 0; i < pathnames.length; i++) {
      let currentChar = pathnames[i];
      if (currentChar != "/" && currentChar) {
        finalStr += pathnames[i];
      } else {
        break;
      }
    }
    return finalStr;
  };
  const firstRoute = getFirstRoute();
  return (
    <header className="navbar w-f h-20 flex items-center">
      <nav className="font-bold text-3xl">
        <Link
          className={`general-navbar__items navbar__home mx-4 p-1 ${
            firstRoute === "" ? "underline font-bold highlighted-test" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`general-navbar__items navbar__tests mx-4 p-1 ${
            firstRoute === "Tests" ? "underline font-bold highlighted-test" : ""
          }`}
          href="/Tests/Easy"
        >
          Tests
        </Link>
        <Link
          className={`general-navbar__items navbar__statistics ml-4 p-1 ${
            firstRoute === "Statistics"
              ? "underline font-bold highlighted-test"
              : ""
          }`}
          href="/Statistics"
        >
          Statistics
        </Link>
      </nav>
      <Image
        src="/keyboard.png"
        alt="keyboard logo"
        width={90}
        height={80}
        className="ml-auto mr-2 h-full cursor-pointer hover-scale"
        onClick={backToHome}
      />
    </header>
  );
};

export default Navbar;
