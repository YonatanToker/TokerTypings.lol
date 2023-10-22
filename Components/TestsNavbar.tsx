"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const TestsNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="tests__navbar w-full text-3xl mb-1">
        <Link
          className={`p-1 mx-4 navbar__items ${
            pathname === "/Tests/Easy"
              ? "underline font-semibold highlighted-test"
              : ""
          }`}
          href="/Tests/Easy"
        >
          Easy
        </Link>
        <Link
          className={`p-1 mx-4 navbar__items ${
            pathname === "/Tests/Normal"
              ? "underline font-semibold highlighted-test"
              : ""
          }`}
          href="/Tests/Normal"
        >
          Normal
        </Link>
        <Link
          className={`p-1 mx-4 navbar__items ${
            pathname === "/Tests/Hard"
              ? "underline font-semibold highlighted-test"
              : ""
          }`}
          href="/Tests/Hard"
        >
          Hard
        </Link>
        <Image
          className="hidden tests__navbar-bars"
          src="/menu-white.png"
          alt="tests-menu"
          width={30}
          height={30}
        />
      </nav>
      <hr className="tests__navbar-hr" />
    </>
  );
};

export default TestsNavbar;
