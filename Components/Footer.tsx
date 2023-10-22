"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const openLinkToGithub = () => {
    window.open("https://github.com/YonatanToker");
  };
  const openLinkToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/yonatan-toker-073607170/");
  };
  return (
    <footer className="logos-footer">
      <p className="footer-paragraph">@ Made by Yonatan Toker</p>
      <div className="logos-container">
        <Image
          className="hover-scale"
          src="/github.png"
          alt="github logo"
          width={40}
          height={40}
          onClick={openLinkToGithub}
        />
        <Image
          className="hover-scale"
          src="/linkedin.png"
          alt="linkedIn logo"
          width={40}
          height={40}
          onClick={openLinkToLinkedIn}
        />
      </div>
    </footer>
  );
};

export default Footer;
