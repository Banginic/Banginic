import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { Loading } from "../components/exportComp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Messages() {
  const [isLoading, setLoading] = useState(false);
  const { baseUrl, token, messages, setMessages, run } = useContext(AppContext);



  useEffect(() => {
   
    async function fetchMessages() {
      setLoading(true);
      try {
        const { data } = await axios.get(baseUrl + "/api/v2/messages/list", {
          headers: { authorization: `Bearer ${token}` },
        });
        const { success, message, messages } = data;

        if (success) {
          toast.success(message);
          setMessages(messages);
          return setLoading(false);
        }
        toast.error(message);
        setLoading(false);
      } catch (ex) {
        setLoading(false);
        toast.error(ex.response.data.message);
      }
    }
    fetchMessages();
    return () => {};
  }, [run]);

  if (isLoading) return <Loading />;

  return (
    <div className="h-screen mt-12">
      <h1 className="heading3 mano text-center my-4">MESSAGES</h1>
      {messages.length < 1 ? (
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
            {messages.map((message, index) => (
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
