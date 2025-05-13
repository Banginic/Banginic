import React from "react";
import { useParams } from "react-router-dom";
import myFetch from "../utils/myFetch";
import useFetch from "../hooks/useFetch";
import { Loading, Back } from "../components/exportComp";

function ViewJob() {
  const { jobId } = useParams();

  async function returnFn() {
    const endpoint = "/api/v2/jobs/single";
    return myFetch({ method: "get", endpoint, body: "", id: jobId });
  }

  const { isLoading, isError, data } = useFetch(`Job: ${jobId}`, returnFn);

  if (isLoading) {
    return <Loading />;
  }
  if (isError)
    return (
      <div className="grid min-h-screen place-items-center text-center">
        <div>
          <h2 className="heading4">Error fetching Job</h2>
          <p>Please try again later</p>
          <button className="cursor-pointer hover:bg-slate-300 px-4 py-1 rounded trans">
            Retry later
          </button>
        </div>
      </div>
    );
  return (
    <div className="min-h-screen relative">
      <div className="absolute left-8 2xl:left-20 top-0">
        <Back link={"/job-applications"} />
      </div>
      <h1 className="heading4 mt-12 mano text-center">VIEW JOB</h1>
      <div className="border border-gray-300 w-[95%] mx-auto lg:w-2xl p-4 mt-8 rounded">
        <div className="bg-accent/10 p-4 rounded-sm">
          <p className="heading4 my-4">{data?.job.title}</p>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Date Posted</h4>
            <p className="text-green-500">
              {new Date(data?.job.postedDate).toLocaleDateString()}
            </p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Latest Date</h4>
            <p className="text-red-500">
              {new Date(data?.job.latestDate).toLocaleDateString()}
            </p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Job Location</h4>
            <p className=" hover:underline cursor-pointer">
              {data?.job.location}
            </p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Total Applied</h4>
            <p className="">{23}</p>
          </div>

          <div className="text-sm flex flex-col gap-1 mt-2">
            <h4 className="text-gray-500 ">Job Description</h4>
            <p className=" min-h-24 bg-gray-100 p-2 rounded border border-gray-200">
              {data?.job.description}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <button className="p-4 py-2 rounded-sm cursor-pointer hover:bg-red-300 bg-red-200 text-red-900">
            Delete Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewJob;
