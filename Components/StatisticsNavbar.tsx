"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const StatisticsNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="tests__navbar">
        <Link
          className={`navbar__items ${
            pathname === "/Statistics" ? "highlighted-test" : ""
          }`}
          href="/Statistics"
        >
          Overall
        </Link>
        <Link
          className={`navbar__items ${
            pathname === "/Statistics/Easy" ? "highlighted-test" : ""
          }`}
          href="/Statistics/Easy"
        >
          Easy
        </Link>
        <Link
          className={`navbar__items ${
            pathname === "/Statistics/Normal" ? "highlighted-test" : ""
          }`}
          href="/Statistics/Normal"
        >
          Normal
        </Link>
        <Link
          className={`navbar__items ${
            pathname === "/Statistics/Hard" ? "highlighted-test" : ""
          }`}
          href="/Statistics/Hard"
        >
          Hard
        </Link>
      </nav>
      <hr className="tests__navbar-hr" />
    </>
  );
};

export default StatisticsNavbar;
