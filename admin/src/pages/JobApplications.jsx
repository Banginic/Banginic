import React from "react";
import { Jobs, Applications } from "../components/LazyExports";



function JobApplications() {

  return (
    <div className="min-h-screen my-12 lg:bg-accen lg:w-4xl mx-auto ">
        <h1 className="mano heading4 text-center lg:p-8">AVAILABLE JOBS / APPLICATIONS</h1>
        <Jobs />
        <hr className="my-12"/>
        <Applications />
    </div>
  );
}

export default JobApplications;
