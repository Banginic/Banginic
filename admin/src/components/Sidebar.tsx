
import { navlinks } from "./data";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className=" md:hidden h-screen w-[70%] bg-slate-50 grid justify-items-center  border">
      <ul className="mt-10 flex flex-col gap-4 w-full">
        {navlinks.map((link) => (
          <NavLink to={link.link} className={` w-full px-3 py-2`}>
            <li>{link.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
