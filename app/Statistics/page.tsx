import React from "react";
import { LineChart } from "@/Components";
const page = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-3xl">Your overall statistics</h1>
      {/* {a conditional render which will show that you don't have any stats to show if nothing in the localStorage} */}
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default page;
