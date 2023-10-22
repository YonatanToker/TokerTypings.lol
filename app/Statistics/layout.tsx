import React from "react";
import { StatisticsNavbar } from "@/Components";
const StatisticsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatisticsNavbar />
      {children}
    </>
  );
};

export default StatisticsLayout;
