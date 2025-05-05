import { useContext, useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { navlinks } from "../assets/assest";
import { Logo } from "./exportComp";
import AppContext from "../context/AppContext";

function Navbar() {
  const { removeAllDisplay, setShowSidebar } = useContext(AppContext);
  const [location, setLocation] = useState("");
  const path = useLocation();
  useEffect(() => {
    setLocation(path.pathname);
  }, [path]);
  return (
    <nav className="h-16 lg:h-20 flex items-center justify-between lg:justify-around p-5 bg-gray-50">
      <Logo logoSize={"size-8 lg:size-12"} textSize={"heading3"} />

      {/* SMALL SCREEN */}
      <div className="md:hidden">
        <button
          onClick={() => {
            removeAllDisplay();
            setShowSidebar(true);
          }}
          className="cursor-pointer hover:scale-105 trans 
       bg-slate-200 hover:bg-slate-300 rounded shadow top-1 right-1 size-8 grid place-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
      {/* LARGE SCREEN */}
      <div className="hidden md:flex gap-8">
        <ul className=" hidden md:flex items-center gap-5 text-sm ">
          {navlinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              className={`${
                location === link.link
                  ? "active font-medium text-accent border-b"
                  : ""
              }  `}
            >
              <li key={link.link}>{link.name}</li>
            </NavLink>
          ))}
        </ul>
        <button className="hidden md:block text-red-500 bg-red-50 border border-red-200 px-6 py-2 hover:bg-red-100 text-sm font-medium rounded-sm trans">
          Log out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
