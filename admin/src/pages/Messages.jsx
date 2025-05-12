import { Loading } from "../components/exportComp";
import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import myFetch from "../utils/myFetch";

function Messages() {

  async function returnFn() {
    const endpoint = "/api/v2/messages/list";
    return myFetch({ method: "get", endpoint });
  }
  const { navigate } = useContext(AppContext);
  const { isError, isLoading, data, refetch } = useFetch(
    "Messages",
    returnFn
  );

  if (isLoading) return <Loading />;

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
  return (
    <div className="h-screen mt-12 2xl:mt-20">
      <h1 className="heading3 mano text-center my-4">MESSAGES</h1>
      {!data.messages ? (
        <div className="grid place-items-center">
          <h3 className="heading3 mt-24">No message available</h3>
          <p className="text-gray-600 text-lg xl:w-2xl text-center">
            Be patient Boss
          </p>
        </div>
      ) : (
        <table className="border rounded border-gray-300 mx-auto w-sm lg:w-xl text-sm ">
          <thead>
            <tr className="flex gap-4 justify-around py-2 bg-gray-200">
              <th>SN</th>
              <th>SENDER</th>
              <th>SUBJECT</th>
              <th>DATE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.messages.map((message, index) => (
              <tr
                key={index}
                title="View message"
                className="flex gap-4 text-gray-600 justify-around my-2 bg-gray-50  py-2 items-center"
              >
                <td>{index + 1}</td>
                <td>{message.fullName}</td>
                <td>{message.service}</td>
                <td>{message.date || new Date().getFullYear()}</td>
                <td
                  className="bg-green-300 py-1.5 text-green-800 text-sm px-4 hover:bg-green-200 cursor-pointer rounded"
                  onClick={() => navigate(`/message/${message._id}`)}
                >
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Messages;
