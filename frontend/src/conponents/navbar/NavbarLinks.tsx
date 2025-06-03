
import { NavLink } from "react-router-dom";


function NavbarLinks() {
  
  const navLinks = [
    { name: "Home", pathName: "/" },
    { name: "Services", pathName: "/services" },
    { name: "Projects", pathName: "/works/all" },
    { name: "About", pathName: "/about-us" },
  ];
  return (
    <ul
      className={`hidden md:flex justify-between md:gap-3 lg:gap-7 font-bold items-center`}
    >
      {navLinks.map((link, index) => {
        return (
          <li key={index} className="pointer clickEvent montserrat ">
            <NavLink
              to={link.pathName}
              title={`Go to ${link.name}`}
              aria-label={`${link.name} section `}
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}

      <li className="pointer clickEvent">
        <NavLink to="/contact-us" className="">
          <button className="font-medium bg-accent montserrat hover:bg-accent-tone rounded-full cursor-pointer text-white px-6 py-2 md:text-sm">
            Get in touch
          </button>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavbarLinks;
