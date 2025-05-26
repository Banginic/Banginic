import React, { useEffect, useState } from "react";
import myFetch from "../utils/myFetch";
import { useFetch } from "./exportComp";
import { Loading } from "../components/exportComp";
import useMutate from "../hooks/useMutate";

function NewsLetterSubscribers() {
  const [deleteId, setDeleteId] = useState("");

  function fetchFn() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/newsletters-subscription/list",
      body: "",
      id: "",
    };
    return myFetch(fetchDetails);
  }
  function deleteFn() {
    const fetchDetails = {
      method: "delete",
      endpoint: "/api/v2/newsletters-subscription/delete",
      body: "",
      id: deleteId,
    };
    return myFetch(fetchDetails);
  }
  const { isLoading, refetch, data, isError } = useFetch(
    "newsletters-subscriber",
    fetchFn
  );

  const { mutate, isPending } = useMutate(
    deleteFn,
    deleteId,
    "newsletters-subscriber"
  );

  useEffect(() => {
    function deleteData() {
      if (deleteId.length > 4) {
        mutate();
      }
    }
    deleteData();
    return () => {};
  }, [deleteId]);

  if (isLoading || isPending || !data) return <Loading />;

  if (isError || !data.message)
    return (
      <div className="h-screen grid place-items-center text-center">
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
  if (data?.newsLetters.length < 1) {
    return (
      <div>
        <h3 className="heading3">No Subscribers available</h3>
      </div>
    );
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <table>
        <thead>
          <tr className="border bg-gray-100 border-gray-300 flex justify-between gap-8 py-2 px-4  rounded-sm">
            <th>SN</th>
            <th>EMAIL</th>
            <th>DATE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.newsLetters.map((item, index) => (
            <tr
            key={index}
             className="border border-gray-300 flex justify-between gap-8 py-2 px-4 hover:bg-gray-100">
              <td>{index + 1}</td>
              <td>{item.emailAddress}</td>
              <td>{new Date(item.date).toLocaleDateString("en-GB")}</td>
              <td
                className="text-red-800 px-4 rounded py-1 cursor-pointer hover:bg-red-500 bg-red-300"
                onClick={() => {
                  setDeleteId(item._id);
                }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewsLetterSubscribers;
