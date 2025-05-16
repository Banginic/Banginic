import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

function Github() {
  const { theme } = useContext(AppContext);
  const link = "https://github.com/BinaryDigitz";
  return (
    <a href={link} className="" target="self" title="Go to our Githup page">
      {theme === "dark" ? (
        <img
          src="./dev_icons/github-mark-white.png"
          alt="github logo"
          className="size-6"
        />
      ) : (
        <img
          src="./dev_icons/github-mark.png"
          alt="github logo"
          className="size-6"
        />
      )}
    </a>
  );
}

export default Github;
