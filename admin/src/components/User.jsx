import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { person_Placeholder } from "../assets/assest";

function User() {
  const { setIsLoggedIn, navigate, isLoggedIn } = useContext(AppContext);
  return (
    <section>
      {isLoggedIn && (
        <div className="group relative hidden lg:block">
          <img
            src={person_Placeholder}
            width={30}
            className="rounded-full bg-white cursor-pointer"
            alt="person placeholder"
          />
          <ul className="absolute hidden group-hover:block left-0 -bottom-15 text-sm border p-2 rounded border-gray-300 w-24">
            <li
              title="View profile."
              className="px-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              Profile
            </li>
            <li
              onClick={() => {
                localStorage.clear();
                setIsLoggedIn(false);
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }}
              title="Log out completely."
              className="px-1 text-red-400 hover:bg-red-100 cursor-pointer"
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default User;
