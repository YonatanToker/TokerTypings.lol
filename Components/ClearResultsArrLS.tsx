"use client";
import React from "react";

const ClearResultsArrLS = () => {
  const handleDeleteResultsArr = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("resultsArr");
      window.location.href = "/";
    }
  };
  return (
    <button
      className="reset-default-btn hover-scale"
      onDoubleClick={handleDeleteResultsArr}
      title="double click"
    >
      clear stats
    </button>
  );
};

export default ClearResultsArrLS;
