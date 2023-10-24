import "../globals.css";
import React from "react";
import { ClearResultsArrLS, StatisticsNavbar } from "@/Components";
const StatisticsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatisticsNavbar />
      {children}
      <ClearResultsArrLS />
    </>
  );
};

export default StatisticsLayout;
