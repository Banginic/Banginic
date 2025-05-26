import React, { useState } from "react";
import { Jobs, Applications } from "../components/LazyExports";

function JobApplications() {
  const [pageState, setPageState] = useState("vaccancy");

  return (
    <div className="min-h-screen my-8 lg:bg-accen lg:w-4xl mx-auto ">
      <h1 className="mano heading3 text-center">
        AVAILABLE JOBS / APPLICATIONS
      </h1>
      <div className="grid mt-8">
        <div className="inline-flex p-4 rounded bg-gray-200 gap-4 mx-auto">
          <button
            onClick={() => setPageState("vaccancy")}
            className={`px-4 py-2 bg-indigo-500 hover:opacity-80 trans cursor-pointer text-white rounded ${
              pageState === "vaccancy" ? "shadow-red-500 shadow-lg" : ""
            }`}
          >
            Vacancy
          </button>
          <button
            onClick={() => setPageState("applications")}
            className={`px-4 py-2 bg-accent hover:opacity-80 trans cursor-pointer text-white rounded ${
              pageState === "applications" ? "shadow-red-500 shadow-lg" : ""
            }`}
          >
            Applications
          </button>
        </div>
      </div>
     
      <div>{pageState === "vaccancy" && <Jobs />}</div>
      <div>{pageState === "applications" && <Applications />}</div>
    </div>
  );
}

export default JobApplications;
