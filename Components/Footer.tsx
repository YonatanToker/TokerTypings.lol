"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const openLinkToGithub = () => {
    window.open("https://github.com/YonatanToker");
  };
  return (
    <footer className="logos-footer">
      <p className="footer-paragraph">@ Made by Yonatan Toker</p>
      <div className="logos-container">
        <Image
          className="hover-scale"
          src="/github.png"
          alt="github icon"
          title="github repo"
          width={40}
          height={40}
          onClick={openLinkToGithub}
        />
        <Link href="/Support">
          <Image
            className="hover-scale"
            src="/support.png"
            alt="support icon"
            title="support"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
