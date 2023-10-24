"use client";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
// import { Chart as chartjs } from "chart.js/auto";
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
  return (
    <div>
      <Line className="line-chart" data={chartData} options={options}></Line>
    </div>
  );
};

export default LineChart;
