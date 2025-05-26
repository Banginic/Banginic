import React, { useEffect, useState } from "react";
import myFetch from "../utils/myFetch";
import { useFetch } from "./exportComp";
import { Loading } from "../components/exportComp";
import useMutate from "../hooks/useMutate";

function ViewNewsletters() {
  const [id, setId] = useState("");
  function returnFn() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/newsletters/list",
      body: "",
      id: "",
    };
    return myFetch(fetchDetails);
  }
  function deleteFn() {
    const fetchDetails = {
      method: "delete",
      endpoint: "/api/v2/newsletters/delete",
      body: "",
      id,
    };
    myFetch(fetchDetails);
  }
  const { isLoading, data, refetch, isError } = useFetch(
    "newsletter",
    returnFn
  );
  const { isPending, mutate } = useMutate(
    deleteFn,
    `Delete: ${id}`,
    "newsletter"
  );

  useEffect(() => {
    if (id.length > 4) {
      return mutate();
    }
    return () => {};
  }, [id]);

  if (isLoading || isPending) return <Loading />;

  if (isError || !data.newsletters)
    return (
      <div className="grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching messages</h2>
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
  return (
    <div className="grid place-items-center min-h-screen">
      <h1 className="mt-8 mano heading4 text-center">NEWSLETTERS</h1>
      <div className=" ">
        {data?.newsletters.map((item, index) => (
          <section
            key={index + 1}
            className="w-sm mb-4 md:w-lg border border-gray-300 shadow-accent/40 shadow-xl  rounded-lg p-4"
          >
            <div className="md:flex gap-4">
              <div className="text-sm">
                <p className="flex items-center gap-7.5">
                  <span className=" text-gray-500">Date</span>
                  <span className="text-green-700">
                    {new Date(item.createdAt).toLocaleDateString("en-GB")}
                  </span>
                </p>
                <p className="flex items-center gap-4 my-1">
                  <span className=" text-gray-500">Subject</span>
                  <span>{item.subject}</span>
                </p>
                <button
                  onClick={() => setId(item._id)}
                  className="text-red-500 cursor-pointer shadow hover:bg-red-200 border-red-200 border my-4 md:my-2 px-4 py-1 rounded mt-2"
                >
                  Delete
                </button>
              </div>
              <p className="flex flex-col shadow items-basline gap-1 flex-1 mb-2 border p-4 rounded-lg border-gray-300 bg-gray-100">
                <span className=" text-gray-500">Body</span>
                <span className="text-sm ">{item.body}</span>
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ViewNewsletters;
