import React, { useState } from "react";
import Logo from "../components/Logo";
import useMutate from "../hooks/useMutate";
import myFetch from "../utils/myFetch";

function JobApplicationForm() {
  const endpoint = "/api/v2/jobs/create";
  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    description: "",
  });
  const { isLoading, isError, mutate } = useMutate(myFetch, "Create job");
  const disabledBTN =
    newJob.description.length < 15 || newJob.location.length < 5;

  async function handleFormSubmit(event) {
    event.preventDefault();
    mutate({ method: "post", endpoint, body: newJob, id: "" });
    return setTimeout(() => {
      setNewJob({
        title: "",
        location: "",
        description: "",
      });
    }, 2000);
  }

  return (
    <div className="min-h-screen my-12">
      <h1 className="heading4 mano text-center">JOB FORM</h1>
      <form
        onSubmit={handleFormSubmit}
        className="border border-gray-300 p-4 lg:p-8 rounded-sm w-sm lg:w-md mx-auto mt-8 text-sm"
      >
        <Logo logoSize={"size-8"} textSize={"heading4"} />
        <p className="text-gray-500">Please post a job using the form below.</p>
        <div className="mt-8 mb-4">
          <label htmlFor="title" className="block ml-1 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            required
            className="border border-gray-300 rounded-sm py-2 px-4 w-full"
            placeholder="Software engineer"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block ml-1 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            required
            className="border border-gray-300 rounded-sm py-2 px-4 w-full"
            placeholder="Douala CMR / Remote"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block ml-1 mb-1">
            Description
          </label>
          <textarea
            name="title"
            value={newJob.description}
            onChange={(e) =>
              setNewJob({ ...newJob, description: e.target.value })
            }
            required
            rows={10}
            className="border border-gray-300 rounded-sm py-2 px-4 w-full"
            placeholder="Detailed description"
          ></textarea>
        </div>
        <button
          disabled={disabledBTN}
          className="w-full mt-4 rounded-sm py-2 bg-black text-white hover:bg-black/90 cursor-pointer disabled:bg-gray-400"
        >
          {isLoading ? "Post....." : " Post job"}
        </button>
        <p className="text-red-500 text-center h-5 mt-2">{isError}</p>
      </form>
    </div>
  );
}

export default JobApplicationForm;
