import React, { useState } from "react";
import { useParams } from "react-router-dom";
import copyToClipboard from "../lib/copyToClipboard";
import handleDownload from "../lib/handleDownload";
import myFetch from "../utils/myFetch";

function ViewJobApplication() {
 const [ copied, setCopied ] = useState(false)

  const { applicationId } = useParams();



  return (
    <div className="min-h-screen ">
      <h1 className="heading4 mt-12 mano text-center">VIEW JOB APPLICATION</h1>
      <div className="border border-gray-300 w-[95%] mx-auto lg:w-2xl p-4 mt-8 rounded">
        <h3 className="heading4 text-accent mb-4 text-center">Junior software developer</h3>
        <div className="bg-accent/10 p-4 rounded-sm">
          <p className="heading4">{applications[0].fullName.toUpperCase()}</p>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Date applied</h4>
            <p>{"23/04/1030"}</p>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Email Address</h4>
            <p className=" hover:underline cursor-pointer">{"apllicant@mail.com"}</p>
            <svg onClick={() => copyToClipboard('My text')} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" title='Copy' className="size-4 cursor-pointer fill-black/70 hover:fill-black" ><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Phone number</h4>
            <p className="">{"+237 734 83483"}</p>
            <svg onClick={() => copyToClipboard('My text')} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" title='Copy' className="size-4 cursor-pointer fill-black/70 hover:fill-black" ><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>

          </div>
          <div className="text-sm flex gap-4 items-center mt-1">
            <h4 className="text-gray-500 w-24">Resume</h4>
            <a onClick={() => handleDownload('my text')} className="text-indigo-700 group flex gap-2 items-center text-sm p-1 cursor-pointer" href="https://youtube.com">
            <span className="group-hover:underline">Download CV</span>
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-black/70 group-hover:fill-black cursor-pointer"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>

            </a>
          </div>
          <div className="text-sm flex flex-col gap-1 mt-2">
            <h4 className="text-gray-500 ">Motivation letter</h4>
            <p className=" min-h-24 bg-gray-100 p-2 rounded border border-gray-200">{"+237 734 83483"}</p>
          </div>
        </div>
      <div className="mt-8">
        <button
        className="p-4 py-2 rounded-sm cursor-pointer hover:bg-red-300 bg-red-200 text-red-900"
        >Delete Appplication</button>
      </div>
      </div>
    </div>
  );
}

export default ViewJobApplication;
