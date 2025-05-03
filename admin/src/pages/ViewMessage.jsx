import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import { Loading } from "../components/exportComp";

function ViewMessage() {
  const { baseUrl, token, navigate, messages } = useContext(AppContext);
  const { messageId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(() => messages.find((message) => message._id === messageId));
  }, []);

  async function deleteMessage() {
    setLoading(true);
    try {
      const { data } = await axios.delete(
        baseUrl + `/api/v2/messages/delete/${messageId}`,
        { headers: { authorization: `Bearer ${token}` } }
      );
      const { message, success } = data;
      if (success) {
        setLoading(false);
        toast.success(message);
        return setTimeout(() => navigate("/message"), 1000);
      }
      setLoading(false);
      toast.error(message);
    } catch (ex) {
      toast.error(ex.response.data.message);
    }
  }
  if (isLoading) {
    return <Loading />;
  }
  if (!message) {
    navigate("/message");
  }
  if(isLoading){
    return <Loading />
  }
  return (
    <div className="h-screen mt-12 text-sm">
      <h1 className="heading4 mano text-center ">VIEW MESSAGE</h1>
      <div className="w-sm lg:w-lg rounded p-5 mt-4 bg-gray-100 mx-auto">
        <div>
          <div className="flex  gap-16.5 mb-1">
            <p className="text-gray-600">Sender:</p>
            <span>{message?.fullName}</span>
          </div>
          <div className="flex gap-6 mb-1">
            <p className="text-gray-600">Email address:</p>
            <span>{message?.emailAddress}</span>
          </div>
          <div className="flex gap-16.5 mb-1">
            <p className="text-gray-600">Subject:</p>
            <span>{message?.service}</span>
          </div>
          <div className="flex   gap-5 mb-1">
            <p className="text-gray-600">Phone number:</p>
            <span>{message?.phoneNumber}</span>
          </div>
          <div className="flex   gap-12">
            <p className="text-gray-600">Send date:</p>
            <span>20/04/2025</span>
          </div>
        </div>
      </div>
      <p className="w-sm lg:w-lg mx-auto mt-8 p-5 text-gray-800 bg-accent/10 min-h-30 rounded">
        {message?.message}
      </p>
      <div className="mt-4 mx-auto w-sm lg:w-lg">
        <button
          onClick={deleteMessage}
          title="Delete this Message?"
          className="bg-red-200 cursor-pointer hover:bg-red-300 trans text-red-800 px-4 py-1.5 rounded"
        >
          Delete Message
        </button>
      </div>
    </div>
  );
}

export default ViewMessage;
