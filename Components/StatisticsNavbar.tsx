"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const StatisticsNavbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="tests__navbar w-full text-3xl mb-1">
        <Link
          className={`p-1 mx-4 navbar__items ${
            pathname === "/Statistics"
              ? "underline font-semibold highlighted-test"
              : ""
          }`}
          href="/Statistics"
        >
          Overall
        </Link>
        <Link
          className={`p-1 mx-4 navbar__items ${
            pathname === "/Statistics/Easy"
              ? "underline font-semibold highlighted-test"
              : ""
          }`}
          href="/Statistics/Easy"
        >
          Easy
        </Link>
        <Link
          className={`p-1 mx-4 navbar__items ${
            pathname === "/Statistics/Normal"
              ? "underline font-semibold highlighted-test"
              : ""
          }`}
          href="/Statistics/Normal"
        >
          Normal
        </Link>
        <Link
          className={`p-1 mx-4 navbar__items ${
            pathname === "/Statistics/Hard"
              ? "underline font-semibold highlighted-test"
              : ""
          }`}
          href="/Statistics/Hard"
        >
          Hard
        </Link>
        <Image
          className="hidden tests__navbar-bars"
          src="/menu-white.png"
          alt="statistics-menu"
          width={30}
          height={30}
        />
      </nav>
      <hr className="tests__navbar-hr" />
    </>
  );
};

export default StatisticsNavbar;
