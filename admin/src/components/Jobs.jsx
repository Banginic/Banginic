import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Loading, useFetch } from "../components/exportComp";
import myFetch from "../utils/myFetch";

function Jobs() {
  async function returnFn() {
    const endpoint = "/api/v2/jobs/list";
    return myFetch({ method: "get", endpoint });
  }
  const { navigate } = useContext(AppContext);
  const { isLoading, isError, data, refetch } = useFetch("jobs", returnFn);

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !data.message)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching Jobs</h2>
          <p>Please try again later</p>
          <button
            className="bg-gray-200 hover:bg-gray-300 mt-1 px-4 py-1 rounded cursor-pointer"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  if (data?.jobs.length < 1)
    return (
      <div className="mt-8 min-w-sm lg:w-2xl mx-auto">
        <div>
          <h3 className="heading4 text-center">No Job Availble </h3>
          <p className="text-center">Post a Job advert</p>
        </div>
      </div>
    );
  return (
    <div className="mt-8 min-w-sm lg:w-2xl mx-auto">
      <div>
        <button
          onClick={() => navigate("/job-form")}
          className="px-6 cursor-pointer  py-2 rounded-sm  my-4 bg-green-200 text-green-800 hover:bg-green-300 trans"
        >
          Post job
        </button>
        <h3 className=" text-xl mano my-1">JOBS</h3>
        <table className="min-w-[95%] lg:w-2xl border border-gray-300 mx-auto text-sm">
          <thead>
            <tr className="flex gap-4 justify-around py-2 bg-gray-200 ">
              <th>SN</th>
              <th>TITLE</th>
              <th>LOCATION</th>
              <th>POSTED DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.jobs.map((job, index) => (
              <tr
                key={index}
                className="flex gap-4 justify-around py-1 cursor-pointer  my-1 bg-gray-50"
              >
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.postedDate}</td>
                <td
                  onClick={() => navigate(`/view-job/${job._id}`)}
                  className="bg-green-200 hover:opacity-80 cursor-pointer text-green-700 px-4 py-1 rounded"
                >
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Jobs;
