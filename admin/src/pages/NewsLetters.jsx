import React, { useState } from "react";
import {
  NewsLetterForm,
  ViewNewsletters,
  NewsLetterSubscribers,
} from "../components/LazyExports";

function NewsLetters() {
  const [pageState, setPageState] = useState("create");
  return (
    <div className="min-h-screen mt-12">
      <h1 className="heading3 text-center mano">NEWSLETTERS</h1>
      <div className="grid ">
        <div className=" bg-gray-100 min-w-sm inline-flex mt-8 p-4 rounded gap-4 mx-auto">
          <button
            onClick={() => setPageState("create")}
            className={`py-2 px-6 shadow-red-500 ${
              pageState === "create" ? "shadow-lg" : ""
            } bg-gray-500 text-gray-100 rounded hover:bg-gray-400 cursor-pointer`}
          >
            Create Newsletter
          </button>
          <button
            onClick={() => setPageState("news")}
            className={`py-2 px-6 shadow-red-500 ${
              pageState === "news" ? "shadow-lg" : ""
            } bg-indigo-500 text-gray-100 rounded hover:bg-gray-400 cursor-pointer`}
          >
            View NewsLetters
          </button>
          <button
            onClick={() => setPageState("subscibers")}
            className={`py-2 px-6 shadow-red-500 ${
              pageState === "subscibers" ? "shadow-lg" : ""
            } bg-green-500 text-gray-100 rounded hover:bg-gray-400 cursor-pointer`}
          >
            View subcribers
          </button>
        </div>
      </div>
      <div className="mt-8 grid place-items-center">
        {pageState === "create" && <NewsLetterForm />}
        {pageState === "news" && <ViewNewsletters />}
        {pageState === "subscibers" && <NewsLetterSubscribers />}
      </div>
    </div>
  );
}

export default NewsLetters;
