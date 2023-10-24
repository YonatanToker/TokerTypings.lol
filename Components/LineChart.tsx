"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { Chart as chartjs } from "chart.js/auto";
type resultsArrType = {
  wpm: number;
  accuracy: number;
  correctWords: number;
  wrongWords: number;
  level: string;
};
type LineChartProps = {
  chartData: ChartData<"line", number[], unknown>;
  options?: ChartOptions;
};
const LineChart: React.FC<LineChartProps> = ({ chartData, options }) => {
  return <div></div>;
  // <Line data={chartData} options={options} />;
};

export default LineChart;
