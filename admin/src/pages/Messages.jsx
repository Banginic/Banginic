import { Loading } from "../components/exportComp";
import { Link } from "react-router-dom";
import fetchMessages from "../utils/fetchMessages";
import useFetch from "../hooks/useFetch";

function Messages() {
  const { isError, isLoading, data, refetch } = useFetch(
    "Messages",
    fetchMessages
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
    <div className="h-screen mt-12">
      <h1 className="heading3 mano text-center my-4">MESSAGES</h1>
      {data.messages.length < 1 ? (
        <div className="grid place-items-center">
          <h3 className="heading3 mt-24">No message available</h3>
          <p className="text-gray-600  xl:text-xl">Be patient Boss</p>
        </div>
      ) : (
        <table className="border rounded border-gray-400 mx-auto w-sm lg:w-xl text-sm ">
          <thead>
            <tr className="flex gap-4 justify-around py-2">
              <th>SN</th>
              <th>SENDER</th>
              <th>SUBJECT</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {data.messages.map((message, index) => (
              <Link to={`/messages/${message._id}`} key={index}>
                <tr
                  title="View message"
                  className="flex gap-4 text-gray-600 justify-around my-2 bg-gray-50 hover:bg-gray-100 cursor-pointer py-1"
                >
                  <td>{index + 1}</td>
                  <td>{message.fullName}</td>
                  <td>{message.service}</td>
                  <td>{message.date || new Date().getFullYear()}</td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Messages;
