import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Applications() {
  const { navigate } = useContext(AppContext);
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
  
  if (applications.length < 1)
    return (
      <div className="mt-8 min-w-sm lg:w-2xl mx-auto">
        <div>
          <h3 className="heading4 text-center">No Job Availble Application</h3>
          <p className="text-center">Post a Job advert</p>
        </div>
      </div>
    );
  return (
    <div className="mt-8 min-w-sm lg:w-2xl mx-auto">
      <h1 className=" mb-1 mano heading4">Job Applications</h1>
      <table className="min-w-[95%] lg:w-2xl border border-gray-300 mx-auto text-sm">
        <thead>
          <tr className="flex gap-4 justify-around bg-gray-200 py-2">
            <th>SN</th>
            <th>NAME</th>
            <th>JOB TITLE</th>
            <th>APPLY DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr key={index + 1} className="flex justify-between items-center px-2 py-3 hover:bg-indigo-100/50 border border-indigo-100">
              <td>{index + 1}</td>
              <td>{application.fullName}</td>
              <td>{application.job}</td>
              <td>{application.createdAt}</td>
              <td
                onClick={() => navigate(`/view-application/${application.id}`)}
                className="bg-green-300 hover:opacity-80 cursor-pointer text-green-700 px-4 py-1.5 rounded"
              >
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applications;
