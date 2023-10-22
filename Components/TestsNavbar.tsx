"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const TestsNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="tests__navbar">
        <Link
          className={`navbar__items ${
            pathname === "/Tests/Easy" ? "highlighted-test" : ""
          }`}
          href="/Tests/Easy"
        >
          Easy
        </Link>
        <Link
          className={`navbar__items ${
            pathname === "/Tests/Normal" ? "highlighted-test" : ""
          }`}
          href="/Tests/Normal"
        >
          Normal
        </Link>
        <Link
          className={`navbar__items ${
            pathname === "/Tests/Hard" ? "highlighted-test" : ""
          }`}
          href="/Tests/Hard"
        >
          Hard
        </Link>
      </nav>
      <hr className="tests__navbar-hr" />
    </>
  );
};

export default TestsNavbar;
