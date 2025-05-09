import React from "react";
import { useParams } from "react-router-dom";

function ViewJob() {
  const { applicationId } = useParams();
  const applications = [
    {
      id: 123,
      fullName: "Boiris ayama",
      emailAddress: "email@gmail.com",
      phone: "234342343",
      job: "Junior software developer",
      jobId: 123,
      cvPath: "lcaohhdfhdfhdfhfd",
      createdAt: "23-34-3433",
    },
    {
      id: 1234,
      fullName: "Boiris ayama",
      emailAddress: "email@gmail.com",
      phone: "234342343",
      job: "Junior software developer",
      jobId: 123,
      cvPath: "lcaohhdfhdfhdfhfd",
      createdAt: "23-34-3433",
    },
    {
      id: 1235,
      fullName: "Boiris ayama",
      emailAddress: "email@gmail.com",
      phone: "234342343",
      job: "Junior software developer",
      jobId: 123,
      cvPath: "lcaohhdfhdfhdfhfd",
      createdAt: "23-34-3433",
    },
  ];
  return (
    <div className="min-h-screen">
      <h1 className="heading4 mt-12 mano text-center">VIEW JOB</h1>
      <div className="border border-gray-300 w-[95%] mx-auto lg:w-2xl p-4 mt-8 rounded">
        <div className="bg-accent/10 p-4 rounded-sm">
          <p className="heading4 my-4">{'Junior softeware developer'}</p>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Date Posted</h4>
            <p className="text-green-500">{"23/04/1030"}</p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Latest Date</h4>
            <p className="text-red-500">{"23/04/1030"}</p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Job Location</h4>
            <p className=" hover:underline cursor-pointer">{"Douala Cameroon"}</p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Total Applied</h4>
            <p className="">{23}</p>
          </div>
         
          <div className="text-sm flex flex-col gap-1 mt-2">
            <h4 className="text-gray-500 ">Job Description</h4>
            <p className=" min-h-24 bg-gray-100 p-2 rounded border border-gray-200">{"+237 734 83483"}</p>
          </div>
        </div>
      <div className="mt-8">
        <button
        className="p-4 py-2 rounded-sm cursor-pointer hover:bg-red-300 bg-red-200 text-red-900"
        >Delete Job</button>
      </div>
      </div>
    </div>
  );
}

export default ViewJob;
