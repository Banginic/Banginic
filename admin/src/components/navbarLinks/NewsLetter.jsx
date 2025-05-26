import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

function NewsLetter() {
  const { navigate } = useContext(AppContext);
  return (
    <div className="relative group flex items-cente gap-1">
      <p>NewsLetters</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className={`-rotate-90 size-4 fill-gray-800 group-hover:rotate-90 trans`}
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
      <ul className="absolute hidden  group-hover:flex flex-col gap-1 left-0 text-gray-600 -bottom-21.5 text-sm border p-2 rounded border-gray-300 w-24">
        <li
          onClick={() => navigate("/newsletter-form")}
          className="px-1 cursor-pointer hover:bg-gray-100"
        >
          Create
        </li>
        <li
          onClick={() => navigate("/view-newsletters")}
          className="px-1 cursor-pointer hover:bg-gray-100"
        >
          Newsletters
        </li>
        <li
          onClick={() => navigate("/newsletters-subcribers")}
          className="px-1 cursor-pointer hover:bg-gray-100"
        >
          Subscribers
        </li>
      </ul>
    </div>
  );
}

export default NewsLetter;
