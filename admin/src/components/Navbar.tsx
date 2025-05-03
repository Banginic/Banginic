import { useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { navlinks } from "./data";


function Navbar() {
 const[ location, setLocation ]= useState('')
  const path = useLocation()
  useEffect(() =>{
    setLocation(path.pathname)
  },[path])
  return (
    <div className="h-16 lg:h-20 flex items-center justify-around  bg-gray-50">
      <Link to="/" className="heading3 cursor-pointer">
        Admin
      </Link>
      <ul className=" hidden md:flex justify-between items-center gap-8 text-[17px]">
        {navlinks.map((link) => (
          <NavLink to={link.link} className={`${location === link.link ? 'active' : ''} min-w-18 `}>
            <li key={link.link}>{link.name}</li>
          </NavLink>
        ))}
      </ul>
      <button className="hidden md:block text-red-500 bg-red-50 border border-red-200 px-6 py-2 hover:bg-red-100 text-sm font-medium rounded-sm trans">
        Log out
      </button>
    </div>
  );
}

export default Navbar;
