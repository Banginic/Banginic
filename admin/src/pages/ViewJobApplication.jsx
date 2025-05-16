import { useContext } from "react";
import { useParams } from "react-router-dom";
import copyToClipboard from "../lib/copyToClipboard";
import handleDownload from "../lib/handleDownload";
import myFetch from "../utils/myFetch";
import useFetch from "../hooks/useFetch";
import { Loading, Back } from "../components/exportComp";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";
import { toast } from "react-toastify";
import AppContext from "../context/AppContext";

function ViewJobApplication() {
  const { applicationId } = useParams();
  const { navigate } = useContext(AppContext);

  function returnFn() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/jobs/applications/single",
      body: "",
      id: applicationId,
    };
    return myFetch(fetchDetails);
  }
  function mutateFn() {
    const fetchDetails = {
      method: "delete",
      endpoint: "/api/v2/jobs/applications/delete",
      body: "",
      id: applicationId,
    };
    return myFetch(fetchDetails);
  }

  const { isLoading, isError, data, refetch } = useFetch(
    `Job application: ${applicationId}`,
    returnFn
  );
  const { isPending, mutate } = useMutation({
    mutationFn: mutateFn,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["job-applications"] });
      const timer = setTimeout(() => navigate("/job-applications"));
      return () => clearTimeout(timer);
    },
  });

  if (isLoading || isPending) return <Loading />;

  if (isError) {
    return (
      <div className="grid h-screen place-items-center text-center">
        <div>
          <h2 className="heading4">Error fetching job application</h2>
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

  return (
    <div className="min-h-screen relative">
      <div className="absolute left-8 2xl:left-20 top-0">
        <Back link={"/job-applications"} />
      </div>
      <h1 className="heading4 mt-12 mano text-center">VIEW JOB APPLICATION</h1>
      <div className="border border-gray-300 w-[95%] mx-auto lg:w-2xl p-4 my-8 rounded">
        <h3 className="heading4 text-accent mb-4 text-center">
          {data?.application.job}
        </h3>
        <div className="bg-accent/10 p-4 lg:p-8 rounded-sm">
          <p className="heading4">{data?.application.fullName.toUpperCase()}</p>
          <div className="text-sm flex gap-4 items-center mt-2">
            <h4 className="text-gray-500 w-24">Date applied</h4>
            <p className="text-green-700">
              {new Date(data?.application.createdAt).toLocaleDateString(
                "en-GB"
              )}
            </p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-2">
            <h4 className="text-gray-500 w-24">Email Address</h4>
            <p className=" hover:underline cursor-pointer">
              {data?.application.emailAddress}
            </p>
            <svg
              onClick={() => copyToClipboard("My text")}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              title="Copy"
              className="size-4 cursor-pointer fill-black/70 hover:fill-black"
            >
              <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
            </svg>
          </div>
          <div className="text-sm flex gap-4 items-center mt-2">
            <h4 className="text-gray-500 w-24">Phone number</h4>
            <p className="">{data?.application.phone}</p>
            <svg
              onClick={() => copyToClipboard("My text")}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              title="Copy"
              className="size-4 cursor-pointer fill-black/70 hover:fill-black"
            >
              <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
            </svg>
          </div>
          <div className="text-sm flex gap-4 items-center mt-2">
            <h4 className="text-gray-500 w-24">Resume</h4>
            <a
              onClick={() => handleDownload("my text")}
              className="text-indigo-700 group flex gap-2 items-center text-sm p-1 cursor-pointer"
              href="https://youtube.com"
            >
              <span className="group-hover:underline">Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-black/70 group-hover:fill-black cursor-pointer"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </a>
          </div>
          <div className="text-sm flex flex-col gap-1 mt-2">
            <h4 className="text-gray-500 ">Motivation letter</h4>
            <p className=" min-h-24 bg-gray-100 p-2 rounded border border-gray-200">
              {data?.application.motivation}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={() => mutate()}
            className="p-4 lg:mx-8 py-2 rounded-sm cursor-pointer hover:bg-red-300 bg-red-200 text-red-900"
          >
            Delete Appplication
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewJobApplication;
