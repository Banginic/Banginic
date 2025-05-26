import React, { useState } from "react";
import { ApplyJob } from "../conponents/lazyLoading";
import { useParams } from "react-router-dom";
import Back from "../conponents/Back";
import { useQuery } from "@tanstack/react-query";
import fetchData from "../libs/fetchData";
import CareerDetails from "../conponents/skeletons/CareerDetailSkeleton";

interface Job {
  success: boolean;
  message: string;
  job: {
    _id: string;
    title: string;
    location: string;
    description: string;
    postedDate: string;
    latestDate: string;
  };
}

function ViewJob() {
  const { jobId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const fetchDetails = {
    method: "get",
    endpoint: "/api/v2/jobs/single",
    id: jobId,
  };
  function returnFn() {
    return fetchData(fetchDetails);
  }
  const { isLoading, isError, data, refetch } = useQuery<Job>({
    queryKey: [`Job: ${jobId}`],
    queryFn: returnFn,
  });

  if (isLoading) {
    return <CareerDetails />;
  }
  if (isError) {
    return (
      <div className="h-screen grid place-items-center">
        <div>
          <h3 className="heading3 text-center">Error fetching Jobs</h3>
          <p className="text-center text-gray-500">
            <a href="#footer" className="text-indigo-700 underline font-bold">
              Subscribe
            </a>{" "}
            to our news letter to recieve information of latest openings
          </p>
          <button
            className="py-2 px- border rounded-lg cursor-pointer"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative">
      <div className="absolute  lg:top-12">
        <Back link="/careers" name="Back" />
      </div>
      <h1 className="heading3 text-center">VIEW JOB</h1>
      <div className=" mb-12 lg:flex mt-8 gap-4 lg:justify-around trans">
        <div
          className={`border bg-white/50 shadow-accent/20 shadow-xl dark:bg-black border-gray-200 dark:border-gray-900 rounded-lg p-4 w-sm md:w-lg lg:w-2xl mx-auto ${
            showForm ? "lg:mx-0" : ""
          } mt-8`}
        >
          <div className="mb-4 px-4">
            <h3 className="text-gray-500">Job title</h3>
            <p className="text-lg font-bold">{data?.job.title}</p>
          </div>
          <div className="mb-4 px-4">
            <h3 className="text-gray-500">Posted Date</h3>
            <p className="text-green-500">
              {new Date(data?.job.postedDate as string).toLocaleDateString(
                "en-GB"
              )}
            </p>
          </div>
          <div className="mb-4 px-4">
            <h3 className="text-gray-500">Last Date</h3>
            <p className="text-red-500">
              {new Date(data?.job.latestDate as string).toLocaleDateString(
                "en-GB"
              )}
            </p>
          </div>
          <div className="mb-4 px-4">
            <h3 className="text-gray-500">Location</h3>
            <p>{data?.job?.location}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-gray-500 px-4">Job Desciption</h3>
            <p className="bg-gray-100/50 p-4 rounded-lg mt-1 borde border-gray-500 dark:bg-gray-800/20 text-neutral-700 dark:text-neutral-500">
              {data?.job.description}
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            title="Click to apply"
            className="border px-6 py-2 border-gray-400 hover:scale-105 text-sm rounded mx-4 my-4 cursor-pointer"
          >
            {showForm ? "Hide form" : " Apply for this Job"}
          </button>
        </div>
        <div>{showForm && <ApplyJob jobId={data?.job?._id} setShowForm ={ setShowForm} />}</div>
      </div>
    </section>
  );
}

export default ViewJob;
