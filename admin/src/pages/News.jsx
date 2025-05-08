import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import createNews from "../utils/CreateNews";
import { Loading } from "../components/exportComp";
import fetchNews from "../utils/fetchNews";
import useMutate from "../hooks/useMutate";
import deleteNews from "../utils/deleteNews";

function News() {
  const [result, setResult] = useState({});
  const [news, setNews] = useState({ subject: "", body: "" });
  const { isLoading, data, isError, refetch } = useFetch(
    "News",
    fetchNews,
    "id=null",
    news
  );
  const {
    isPending,
    error,
    mutate: create,
  } = useMutate(createNews, "CREATE NEWS", "NewsID=null", news);
  useEffect(() => {
    if (data) {
      setResult(data.news[0]);
    }
  }, [data]);

  const {
    error: deleteErr,
    mutate: deleteData,
  } = useMutate(deleteNews, "Delete NEWS", result && result._id, "news=null");

  const disabledBTN = news.body.length < 5 || news.body.length < 15;

  if (isLoading || isPending ) return <Loading />;

  if (isError || error || deleteErr)
    return (
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h2 className="heading3">Error fetching Newa</h2>
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
    <div className="min-h-screen mt-12 2xl:mt-20">
      <h1 className="heading3 text-center mano">NEWS</h1>
      {data.news.length > 0 && (
        <div className=" bg-green-100 w-sm lg:w-lg 2xl:w-2xl p-4 rounded mx-auto mt-8">
          <p className="text-green-700" aria-label="Subject">
            {data.news[0].subject}
          </p>
          <p aria-label="Message body" className="text-green-950">
            {data.news[0].body}
          </p>
        </div>
      )}
      <form
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
        <div className="w-sm mx-auto mt-8 lg:w-lg 2xl:w-2xl">
          <label htmlFor="sunject" className="mx-1">
            Subject
          </label>
          <input
            type="text"
            required
            className="border mt-1 w-sm lg:w-lg 2xl:w-2xl mx-auto flex  py-1 px-4 rounded-md border-gray-400"
            maxLength={15}
            placeholder="Subject"
            name="subject"
            value={news.subject}
            onChange={(e) => setNews({ ...news, subject: e.target.value })}
            id="subject"
          />
        </div>
        <div className="w-sm mx-auto mt-4 lg:w-lg 2xl:w-2xl">
          <label htmlFor="discount" className="mx-1">
            Body
          </label>
          <textarea
            className="border mt-1 w-sm lg:w-lg 2xl:w-2xl mx-auto flex p-4 rounded-md border-gray-400"
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
            Change News
          </button>
          {data.news && (
            <button
              onClick={() => deleteData()}
              type="button"
              className="bg-red-700 text-white text-sm  px-4 py-1 rounded cursor-pointer hover:bg-red-600"
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
