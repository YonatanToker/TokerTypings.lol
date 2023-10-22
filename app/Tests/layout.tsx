"use client";
import "./globals.css";
import { TestsNavbar, TypingArea, WordsCount } from "@/Components";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getLastPath } from "@/utils";

const TestsLayout = ({ children }: { children: React.ReactNode }) => {
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const handleCountSelection = (count: number) => {
    setSelectedCount(count);
  };
  let pathname = usePathname();
  let lastPath = getLastPath(pathname);
  return (
    <>
      <TestsNavbar />
      <div className="inside-container">
        <WordsCount onCountSelected={handleCountSelection} />
        {selectedCount && (
          <TypingArea wordsAmount={selectedCount} path={lastPath} />
        )}
      </div>
      {children}
    </>
  );
};

export default TestsLayout;
