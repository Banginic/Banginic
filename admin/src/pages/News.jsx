import React, { useState } from "react";

function News() {
  const [news, setNews] = useState("");
  const newss = {
    subject: "Discount",
    body: "Get 10% Discount on Projects ordered this last Quarter of the year. ",
  };
  const disabledBTN = news.length < 15

  return (
    <div className="min-h-screen mt-12 2xl:mt-20">
      <h1 className="heading3 text-center mano">NEWS</h1>
      <div className=" bg-green-100 w-sm lg:w-lg 2xl:w-2xl p-4 rounded mx-auto mt-8">
        <p className="text-green-700" aria-label="Subject">
          {newss.subject}
        </p>
        <p aria-label="Message body" className="text-green-950">
          {newss.body}
        </p>
      </div>
      <form>
        <div className="w-sm mx-auto mt-8 lg:w-lg 2xl:w-2xl">
          <label htmlFor="discount" className="mx-1">
            Subject
          </label>
          <textarea
            className="border mt-1 w-sm lg:w-lg 2xl:w-2xl mx-auto flex p-4 rounded-md border-gray-400"
            rows={2}
            maxLength={80}
            placeholder="Message body"
            name="body"
            value={news}
            onChange={(e) => setNews(e.target.value)}
            id="discount"
          ></textarea>
        </div>
        <div className="flex mx-auto gap-4 w-sm mt-8">
          <button
          disabled={disabledBTN}
            type="submit"
            className="bg-green-700 text-white text-sm  px-4 py-1 rounded cursor-pointer hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Change News
          </button>
          <button
            type="submit"
            className="bg-red-700 text-white text-sm  px-4 py-1 rounded cursor-pointer hover:bg-red-600"
          >
            Delete News
          </button>
        </div>
      </form>
    </div>
  );
}

export default News;
