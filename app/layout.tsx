//maybe write here "use client"; Idk I'm not quite sure - then the metadata will be deleted
import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/Components";
export const metadata: Metadata = {
  title: "Toker Typings",
  description:
    "Typing exercises website, track your words per minute, accuracy and how you type",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //on main-container there was a container
    //remove the fixed height later
    <html lang="en">
      <body>
        <Navbar />
        <main className="main px-20 py-10 w-full flex flex-col items-center">
          <div className="container rounded-xl main-container p-2">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
