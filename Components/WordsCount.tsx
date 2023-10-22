"use client";
import { Fragment } from "react";
import React, { useState } from "react";

type WordsCountProps = {
  onCountSelected: (count: number) => void;
};

const WordsCount: React.FC<WordsCountProps> = ({ onCountSelected }) => {
  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  const handleCountClick = (count: number) => {
    setSelectedCount(count);
    onCountSelected(count);
  };

  return (
    <>
      <ul className="w-full text-2xl list-none flex justify-center">
        {[25, 35, 50, 100].map((count) => (
          <Fragment key={count}>
            <li
              key={count}
              className={`navbar__items ${
                count === selectedCount ? "highlighted-test" : ""
              }`}
              onClick={() => handleCountClick(count)}
            >
              {count}
            </li>
            {count !== 100 && "|"}
          </Fragment>
        ))}
      </ul>
      <hr className="inside-container__hr" />
    </>
  );
};

export default WordsCount;
