"use client";
import React from "react";
import { LineChart } from "@/Components";
import { useState, useEffect } from "react";
// type resultsArrType = {
//   wpm: number;
//   accuracy: number;
//   correctWords: number;
//   wrongWords: number;
//   level: string;
// };
// type ChartData = {
//   labels: number[];
//   datasets: { label: string; data: number[] }[];
// };
const page = () => {
  // const options = {
  //   scales: {
  //     x: {
  //       beginAtZero: true,
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };
  // const [resultsArr, setResultsArr] = useState<resultsArrType[]>([]);

  // const [chartData, setChartData] = useState<ChartData>({
  //   labels: [],
  //   datasets: [{ label: "words per minute", data: [] }],
  // });

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedArr: resultsArrType[] = JSON.parse(
  //       localStorage.getItem("resultsArr") || "[]"
  //     );
  //     setResultsArr(storedArr);

  //     setChartData({
  //       labels: storedArr.map((_, index) => index + 1),
  //       datasets: [
  //         {
  //           label: "words per minute",
  //           data: storedArr.map((data: resultsArrType) => data.wpm),
  //         },
  //       ],
  //     });
  //   }
  // }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-3xl">Your overall statistics</h1>
      {/* {a conditional render which will show that you don't have any stats to show if nothing in the localStorage} */}
      <div>{/* <LineChart chartData={chartData} options={options} /> */}</div>
    </div>
  );
};

export default page;
