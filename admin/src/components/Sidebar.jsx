import { useContext, useEffect } from "react";
import { navlinks } from "../assets/assest";
import { NavLink } from "react-router-dom";
import AppContext from "../context/AppContext";

function Sidebar() {
  const { showSidebar, setShowSidebar, removeAllDisplay, user, navigate } =
    useContext(AppContext);

  useEffect(() => {
    if (showSidebar) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
  }, [showSidebar]);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-gray-50  z-50 trans p-5 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }
    `}
    >
      <div className=" flex items-center gap-4 px-6">
        {user ? (
          <button className="px-8 py-1.5 bg-red-300 text-red-700 cursor-pointer rounded shadow hover:opacity-80 trans">
            Log out
          </button>
        ) : (
          <button
            onClick={() => {
              removeAllDisplay()
              navigate("/login")
            }}
            className="px-8 py-1.5 bg-accent text-white cursor-pointer rounded shadow hover:opacity-80 trans"
          >
            Login
          </button>
        )}
      </div>
      <button
        onClick={() => {
          removeAllDisplay();
          setShowSidebar(false);
        }}
        className="absolute cursor-pointer hover:scale-105 trans
       bg-slate-200 hover:bg-slate-300 rounded shadow top-5 right-5 size-8 grid place-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="black"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
      <ul className="mt-10 flex flex-col gap-2 w-full">
        {navlinks.map((link) => (
          <NavLink
            onClick={() => removeAllDisplay()}
            key={link.name}
            to={link.link}
            className={` w-full px-6 py-2 bg-gray-50 hover:bg-gray-200 trans text-cente`}
          >
            <li>{link.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
