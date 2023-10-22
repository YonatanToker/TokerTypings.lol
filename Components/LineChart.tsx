import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";
type TestResult = {
  wpm: number;
  accuracy: number;
  correctWords: number;
  wrongWords: number;
  level: string;
};
const LineChart: React.FC = () => {
  return <div>LineChart</div>;
};

export default LineChart;
