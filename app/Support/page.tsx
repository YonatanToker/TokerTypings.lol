"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  const openLinkToGithub = () => {
    window.open("https://github.com/YonatanToker");
  };
  const openLinkToPaypal = () => {
    window.open("https://www.paypal.com/paypalme/yonatantoker");
  };
  return (
    <div className="p-8 mx-auto max-w-screen-xl">
      <h1 className="text-3xl font-semibold mb-6">
        Support TokerTypings.lol 🙌🧡
      </h1>

      <p className="text-lg mb-6">Hello there!👋</p>

      <p className="mb-4">
        I&apos;m Yonatan, the mind and code behind TokerTypings.lol.
      </p>

      <p className="mb-4">
        If you&apos;ve found value in this website, whether it&apos;s helped you
        hone your typing skills or simply brought you joy, I&apos;d appreciate a
        nod of approval – a star on Github would be fantastic!
      </p>

      <p className="mb-4">
        My vision for TokerTypings.lol was to build a typing tool that stands
        out from the rest: simple, minimalistic, and straightforward, all
        without the hassle of logins or sign-ups. Plus, it&apos;s completely
        free and open-sourced, so anyone can contribute, adapt, and learn from
        it. I genuinely hope it inspires you or, at the very least, aids in
        improving your typing speed.
      </p>

      <p className="mb-4 font-semibold">
        If you&apos;re feeling particularly generous and wish to support further
        development, you can:
      </p>

      <ul className="mb-6 list-none list-inside">
        <li className="mb-2 relative">
          <div className="flex items-center space-x-2 pl-5">
            <Link
              href="https://github.com/YonatanToker"
              target="_blank"
              className="hover:underline"
            >
              <span>Contribute on Github</span>
            </Link>
            <Image
              className="hover-scale"
              src="/github-icon.png"
              alt="github icon"
              title="github repo"
              width={40}
              height={40}
              onClick={openLinkToGithub}
            />
          </div>
          <span
            style={{
              content: '""',
              width: "6px",
              height: "6px",
              backgroundColor: "#000", // Change this color if needed
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              borderRadius: "50%",
            }}
          ></span>
        </li>
        <li className="relative">
          <div className="flex items-center space-x-2 pl-5">
            <Link
              href="https://www.paypal.com/paypalme/yonatantoker"
              target="_blank"
              className="hover:underline"
            >
              <span>Donate</span>
            </Link>
            <Image
              className="hover-scale"
              src="/donation.png"
              alt="donation icon"
              title="donate"
              width={40}
              height={40}
              onClick={openLinkToPaypal}
            />
          </div>
          <span
            style={{
              content: '""',
              width: "6px",
              height: "6px",
              backgroundColor: "#000", // Change this color if needed
              position: "absolute",
              left: "0",
              top: "50%",
              transform: "translateY(-50%)",
              borderRadius: "50%",
            }}
          ></span>
        </li>
      </ul>

      <p>
        Every bit of support, be it a Github star, a contribution, or a tip,
        means the world to me. Let&apos;s make TokerTypings.lol even better
        together!
      </p>
      <p className="mt-6">Thank you very much🙏 - Yonatan.</p>
    </div>
  );
};

export default Page;
