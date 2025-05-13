import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function Back(props) {
  const { navigate } = useContext(AppContext);
  return (
    <div
      onClick={() => navigate(`${props.link}`)}
      className="cursor-pointer bg-gray-100 flex-nowrap text-nowrap items-center flex gap-2 hover:bg-gray-300 rounded shadow py-1 lg:py-2 px-4 text-sm"
    >
<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="size-4 lg:size-5" viewBox="0 -960 960 960" width="24px" fill="gray"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>      <p>Back</p>
    </div>
  );
}

export default Back;
