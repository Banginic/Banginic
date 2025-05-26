import React from "react";
import myFetch from "../utils/myFetch";
import useFetch from "../hooks/useFetch";
import { Loading, Back } from "../components/exportComp";
import { useParams } from "react-router-dom";
import useMutate from "../hooks/useMutate";

function ViewProject() {
  const { projectId } = useParams();
  function fetchFunction() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/projects/single",
      body: "",
      id: projectId,
    };
    return myFetch(fetchDetails);
  }
  function deleteFunction() {
    const fetchDetails = {
      method: "delete",
      endpoint: "/api/v2/projects/delete",
      body: "",
      id: projectId,
    };
    return myFetch(fetchDetails);
  }
  const { isLoading, isError, data, refetch } = useFetch(
    `Project: ${projectId}`,
    fetchFunction
  );
  const { isPending, mutate } = useMutate(
    deleteFunction,
    `Project: ${projectId}`,
    "projects",
    "/projects"
  );

  if (isLoading || isPending) return <Loading />;

  if (isError || !data) {
    return (
      <div className="grid min-h-screen place-items-center text-center ">
        <div>
          <h2 className="heading4">Error fetching Project</h2>
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
    <div className="min-h-screen px-8 2xl:px-24 relative">
      <h1 className="text-center mt-8 heading3 mano">VIEW PROJECT</h1>
      <div className="absolute top-2">
        <Back link="/projects" />
      </div>
      <div className="flex flex-col gap-8 md:flex-row my-8">
        <div className="md:w-1/2 border bg-gray-100/50 rounded-lg overflow-hidden border-gray-300 h-[400px]  relative">
          <img src="" className="h-4/5  w-full bg-green-500" alt="img" />
          <span
            title="Preview project"
            className="absolute top-1/2 left-0 bg-gray-100 hover:bg-gray-200 px-6 cursor-pointer py-1 rounded"
          >
            L
          </span>

          <span
            title="Preview project"
            className="absolute top-1/2 right-0 bg-gray-100 hover:bg-gray-200 px-6 cursor-pointer py-1 rounded"
          >
            R
          </span>
          <div className="flex items-center gap-1 absolute bottom-4 -translate-x-1/2 left-1/2">
            <p className="size-3  w-6 bg-gray-500 rounded-full cursor-pointer"></p>
            <p className="h-3 w-3 bg-gray-500 rounded-full"></p>
            <p className="h-3 w-3 bg-gray-500 rounded-full"></p>
            <p className="h-3 w-3 bg-gray-500 rounded-full"></p>
          </div>
          <button
            title="Delete this project"
            onClick={() => mutate()}
            className="bg-red-300 mt-4 mx-2 text-red-700 px-4 py-2 cursor-pointer hover:bg-red-200 rounded"
          >
            Delete Project
          </button>
        </div>
        <div className="md:w-1/2 border border-gray-200 min-h-[400px] rounded p-4">
          <h2 className="heading4">{data?.project.projectName}</h2>
          <div className="grid grid-cols-2 bg-gray-100 p-4 rounded gap-4 mt-4">
            <p className="flex flex-col ">
              <span className="text-gray-500 mano">Category</span>
              <span className="">{data?.project.category}</span>
            </p>
            <p className="flex flex-col ">
              <span className="text-gray-500 mano">Client name</span>
              <span className="">{data?.project.projectName}</span>
            </p>
            <p className="flex flex-col ">
              <span className="text-gray-500 mano">Date</span>
              <span className="">
                {new Date(data?.project.createdAt).toLocaleDateString("en-GB")}
              </span>
            </p>
            <p className="flex flex-col ">
              <span className="text-gray-500 mano">Designer</span>
              <span className="">{data?.project.designer}</span>
            </p>
          </div>
          <div className="mt-8 p-4 bg-gray-300/40 rounded-lg">
            <p className="flex flex-col ">
              <span className="text-gray-500 mano">Description</span>
              <span className="w-full bg-gray-100 p-2 rounded min-h-20">
                {data?.project.description}
              </span>
            </p>
            <p className="flex flex-col my-4">
              <span className="text-gray-500 mano">Story</span>
              <span className="w-full bg-gray-100 p-2 rounded min-h-20">
                {data?.project.story}
              </span>
            </p>
            <p className="flex flex-col ">
              <span className="text-gray-500 mano">Approach</span>
              <span className="w-full bg-gray-100 p-2 rounded min-h-20">
                {data?.project.approach}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProject;
