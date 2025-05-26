import React, { useState } from "react";
import Logo from "./Logo";
import myFetch from "../utils/myFetch";
import { Loading } from "../components/exportComp";
import useMutate from "../hooks/useMutate";

function NewsLetterForm() {
  const [formData, setFormData] = useState({
    subject: "",
    body: "",
  });
  function returnFn() {
    const fetchDetails = {
      method: "post",
      endpoint: "/api/v2/newsletters/create",
      body: formData,
      id: "",
    };
    return myFetch(fetchDetails);
  }
  // function useMutate(mutationFn, mutationKey, invalidationKey, link) {
  const { isPending, mutate, isError } = useMutate(
    returnFn,
    "newsletter",
    "newsletters"
  );

  if (isPending) return <Loading />;

  if (isError)
    return (
      <div className=" text-center grid ">
        <div>
          <h2 className="heading3">Error posting data</h2>
          <p>Please try again later</p>
        </div>
      </div>
    );
  return (
    <div className="grid place-items-center min-h-screen">
      <h1 className="mano heading4 mt-8">CREATE NEWSLETTERS</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          mutate();
        }}
        className="w-sm border my-12 border-gray-300 p-4 text-sm rounded-lg shadow-accent/30 shadow-xl"
      >
        <Logo logoSize={"size-6"} textSize={"heading4"} />
        <p className="text-gray-500 px-8">
          Create news letter using the form below.
        </p>

        <div className="mt-8 mb-4">
          <label htmlFor="subject" className="block m-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="border border-gray-400 w-full py-2 px-4 rounded"
            placeholder="Subject"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block m-1">
            Body
          </label>
          <textarea
            rows={5}
            name="subject"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            className="border border-gray-400 w-full py-2 px-4 rounded"
            placeholder="Subject"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white w-full rounded py-2 my-4 cursor-pointer hover:bg-black/70"
        >
          Create Newsletter
        </button>
      </form>
    </div>
  );
}

export default NewsLetterForm;
