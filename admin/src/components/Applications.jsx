import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { useFetch } from "./exportComp";
import { Loading } from "../components/exportComp";
import myFetch from "../utils/myFetch";

function Applications() {
  const { navigate } = useContext(AppContext);
  function returnFn() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/jobs/applications/list",
    };
    return myFetch(fetchDetails);
  }
  const { isLoading, isError, data, refetch } = useFetch(
    "job-applications",
    returnFn
  );

  if (isLoading) return <Loading />;

  if (isError || !data?.success) {
    return (
      <div className="grid h-screen place-items-center text-center">
        <div>
          <h2 className="heading4">Error fetching job applications</h2>
          <p>Please try again later</p>
          <button
            className="cursor-pointer hover:bg-slate-300 px-4 py-1 rounded trans"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (data?.jobApplications.length < 1)
    return (
      <div className="mt-8 min-w-sm lg:w-2xl mx-auto">
        <div>
          <h3 className="heading4 text-center">No Job Application Availble</h3>
          <button
            onClick={() => navigate("/job-form")}
            className="text-center font-bold px-6 text-indigo-600 py-1.5 hover:bg-black mx-auto border rounded cursor-pointer flex mt-4 "
          >
            Post a Job advert
          </button>
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
            <th>JOB TITLE</th>
            <th>NAME</th>
            <th>APPLY DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.jobApplications.map((application, index) => (
            <tr
              key={index + 1}
              className="flex justify-between items-center px-2 py-3 hover:bg-indigo-100/50 border border-indigo-100"
            >
              <td>{index + 1}</td>
              <td>{application.fullName}</td>
              <td>{application.job}</td>
              <td className="text-green-500">
                {new Date(application.createdAt).toLocaleDateString("en-GB")}
              </td>
              <td
                onClick={() => navigate(`/view-application/${application._id}`)}
                className="bg-black hover:opacity-80 cursor-pointer text-green-300 px-4 py-1.5 rounded"
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
