import React from "react";
import { Jobs, Applications } from "../components/LazyExports";



function JobApplications() {

  return (
    <div className="min-h-screen mt-12  ">
        <h1 className="mano heading4 text-center">AVAILABLE JOBS / APPLICATIONS</h1>
        <Jobs />
        <Applications />
    </div>
  );
}

export default JobApplications;
