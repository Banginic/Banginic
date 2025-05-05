import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { navlinks } from "../assets/assest";
import { Logo } from './exportComp'


function Navbar() {
 const[ location, setLocation ]= useState('')
  const path = useLocation()
  useEffect(() =>{
    setLocation(path.pathname)
  },[path])
  return (
    <nav className="h-16 lg:h-20 flex items-center justify-around bg-gray-50">
      <Logo logoSize={'size-14'} textSize={'heading3'} />
      <ul className=" hidden md:flex items-center gap-5 text-sm ">
        {navlinks.map((link) => (
          <NavLink
          key={link.name}
           to={link.link} className={`${location === link.link ? 'active font-medium text-accent border-b' : ''}  `}>
            <li key={link.link}>{link.name}</li>
          </NavLink>
        ))}
      </ul>
      <button className="hidden md:block text-red-500 bg-red-50 border border-red-200 px-6 py-2 hover:bg-red-100 text-sm font-medium rounded-sm trans">
        Log out
      </button>
    </nav>
  );
}

export default Navbar;
