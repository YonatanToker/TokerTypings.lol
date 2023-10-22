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
    <header className="navbar">
      <nav className="font-bold text-3xl">
        <Link
          className={`general-navbar__items navbar__home ${
            firstRoute === "" ? "highlighted-test" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`general-navbar__items navbar__tests ${
            firstRoute === "Tests" ? "highlighted-test" : ""
          }`}
          href="/Tests/Easy"
        >
          Tests
        </Link>
        <Link
          className={`general-navbar__items navbar__statistics ${
            firstRoute === "Statistics" ? "highlighted-test" : ""
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
