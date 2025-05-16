import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { sidebarLinks } from '../assets/assets.ts'
import{ User} from "../conponents/exportComp.ts";
import { AppContext } from "../context/AppProvider.tsx";

function Sidebar() {
 const appContext = useContext(AppContext)

  return (
    <section
      className="w-full text-light bg-black h-screen p-6 relative"
      onClick={() => appContext?.setShowSidebar(false)}
    >
      <User />
      <ul className="flex md:hidden justify-between gap-5 flex-col pt-20 text-center">
        {sidebarLinks.map((link, index) => {
          return (
            <NavLink
              to={link.pathname}
              key={index}
              className={`w-[80%]  trans text-center  
            hover:bg-gray-900 trans rounded-full  `}
            >
              <div className="flex items-center justify-start px-4 gap-5 py-2 ">
                <img
                  src={link.icon}
                  alt={link.name}
                  height={20}
                  width={20}
                  className="h-6 w-6 "
                />
                <p className=" ">{link.name}</p>
              </div>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
}

export default Sidebar;
