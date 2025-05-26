import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Loading } from "../components/exportComp";
import useMutate from "../hooks/useMutate";
import myFetch from "../utils/myFetch";

function News() {
  const [news, setNews] = useState({ subject: "", body: "" });
  function fetchNews() {
    const fetchDetails = {
      method: "get",
      endpoint: "/api/v2/news/list",
    };
    return myFetch(fetchDetails);
  }
  function createNews() {
    const fetchDetails = {
      method: "post",
      endpoint: "/api/v2/news/create",
      body: news,
    };
    return myFetch(fetchDetails);
  }
  function deleteNews() {
    const fetchDetails = {
      method: "delete",
      endpoint: "/api/v2/news/delete",
      body: "",
      id: data.news[0]._id,
    };
    return myFetch(fetchDetails);
  }

  const { isLoading, data, isError, refetch } = useFetch("News", fetchNews);
  console.log(data);

  const {
    isPending,
    error,
    mutate: create,
  } = useMutate(createNews, `News`, "News");

  const { error: deleteError, mutate: deleteData } = useMutate(
    deleteNews,
    `News`,
    "News"
  );

  const disabledBTN = news.body.length < 5 || news.body.length < 15;
  const disabledDelete = isLoading || isPending || !data.news[0];

  if (isLoading || isPending) return <Loading />;

  if (isError || error || deleteError)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching News</h2>
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
    <div className="min-h-screen mt-8 2xl:mt-20">
      <h1 className="heading3 text-center mano">NEWS</h1>
      {data.news.length > 0 && (
        <div className=" bg-green-100 w-sm lg:w-lg 2xl:w-2xl p-4 rounded mx-auto mt-8">
          <p className="text-red-700" aria-label="Subject">
            <span className="text-gray-500 mr-4">Date created: </span>
            {new Date(data.news[0].createdAt).toDateString("en-GB")}
          </p>
          <p className="text-green-700" aria-label="Subject">
            <span className="text-gray-500 mr-13.5">Subject: </span>
            {data.news[0].subject}
          </p>
          <p aria-label="Message body" className="text-green-950">
            <span className="text-gray-500 mr-7.5">News body: </span>
            {data.news[0].body}
          </p>
        </div>
      )}
      <form
        className="border w-sm lg:w-xl mx-auto mt-8 p-4 rounded border-gray-200 bg-indigo-50/50"
        onSubmit={(e) => {
          e.preventDefault();
          create();
          const timer = setTimeout(
            () => setNews({ subject: "", body: "" }),
            2000
          );
          return () => clearTimeout(timer);
        }}
      >
        <div className="mx-auto mt-8 w-full">
          <label htmlFor="sunject" className="mx-1">
            Subject
          </label>
          <input
            type="text"
            required
            className="border mt-1 w-full mx-auto flex  py-1 px-4 rounded-md border-gray-400"
            maxLength={15}
            placeholder="Subject"
            name="subject"
            value={news.subject}
            onChange={(e) => setNews({ ...news, subject: e.target.value })}
            id="subject"
          />
        </div>
        <div className=" mx-auto mt-4 w-full">
          <label htmlFor="discount" className="mx-1">
            Body
          </label>
          <textarea
            className="border mt-1 w-full mx-auto flex p-4 rounded-md border-gray-400"
            rows={2}
            required
            maxLength={80}
            placeholder="Message body"
            name="body"
            value={news.body}
            onChange={(e) => setNews({ ...news, body: e.target.value })}
            id="body"
          ></textarea>
        </div>
        <div className="flex mx-auto gap-4 w-sm mt-8">
          <button
            disabled={disabledBTN}
            type="submit"
            className="bg-green-700 text-white text-sm  px-4 py-1 rounded cursor-pointer hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Post News
          </button>
          {data.news && (
            <button
              disabled={disabledDelete}
              onClick={() => deleteData()}
              type="button"
              className="bg-red-700 text-white text-sm  px-4 py-1 rounded cursor-pointer hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Delete News
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default News;
