import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

function Hamburger() {
  const appContext = useContext(AppContext);
  return (
    <span
      className="clickEvent material-symbols-outlined md:hover:bg-slate-400 text-4xl hover:cursor-pointer hover:opacity-80"
      onClick={appContext?.toggleSideBar}
    >
      <div className={`text-[var(--primary-color3)]`}>
        {!appContext?.showSidebar ? (
          <svg
            width="50px"
            className={`size-9 ${
              appContext?.theme === "light"
                ? "stroke-[var(--primary-color3)] "
                : "stroke-white"
            }  w-14`}
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20M4 8H20M4 16H12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="50px"
            height="50px"
            className={`size-7 ${
              appContext?.theme === "light"
                ? "stroke-[var(--primary-color3)]"
                : "stroke-[var(--white-color)]"
            } w-14`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Close_LG">
              <path
                id="Vector"
                d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )}
      </div>
    </span>
  );
}

export default Hamburger;
