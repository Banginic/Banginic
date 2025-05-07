import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Loading, useFetch } from "../components/exportComp";
import fetchMessage from "../utils/fetchMessage";
import deleteMessage from '../utils/deleteMessage'
import useMutate from "../hooks/useMutate";

function ViewMessage() {
 const { navigate} = useContext(AppContext)
  const { messageId } = useParams();

  const { isLoading, isError, data, refetch } = useFetch(
    `Message: ${messageId}`,
    fetchMessage,
    messageId
  );
 const { success, isPending, error, mutate } = useMutate(deleteMessage,  `Message: ${messageId}`, messageId)
 
 if(success){
  navigate('/message')
 }
 
  if (isLoading || isPending ) return <Loading />;
 
   if (isError || !data || error){
    return (
      <div className="grid min-h-screen place-items-center text-center ">
        <div>
          <h2 className="heading4">Error fetching Message</h2>
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
    <div className="min-h-screen mt-12 text-sm ">
      <h1 className="heading4 mano text-center ">VIEW MESSAGE</h1>
      <div className="w-sm lg:w-xl 2xl:w-2xl rounded p-5 mt-8 bg-gray-100 mx-auto">
        <div>
          <div className="flex  gap-16.5 mb-1">
            <p className="text-gray-600">Sender:</p>
            <span>{data.message?.fullName}</span>
          </div>
          <div className="flex gap-6 mb-1">
            <p className="text-gray-600">Email address:</p>
            <span>{data.message?.emailAddress}</span>
          </div>
          <div className="flex gap-16.5 mb-1">
            <p className="text-gray-600">Subject:</p>
            <span>{data.message?.service}</span>
          </div>
          <div className="flex   gap-5 mb-1">
            <p className="text-gray-600">Phone number:</p>
            <span>{data.message?.phoneNumber}</span>
          </div>
          <div className="flex   gap-12">
            <p className="text-gray-600">Send date:</p>
            <span>20/04/2025</span>
          </div>
        </div>
      </div>
      <p className="w-sm lg:w-xl 2xl:w-2xl mx-auto mt-8 p-5 text-gray-800 bg-accent/10 min-h-30 rounded">
        {data.message?.message}
      </p>
      <div className="mt-4 mx-auto w-sm lg:w-lg">
        <button
          onClick={() => mutate()}
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
