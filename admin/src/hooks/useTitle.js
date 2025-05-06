import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

function useTitle() {
const { navigate, isLoggedIn} = useContext(AppContext)
  const { pathname } = useLocation();

  useEffect(() => {
    function handleTitle() {
      if(pathname ==='/login' && isLoggedIn ){
        return navigate('/')
      }
      if (pathname === "/") {
        window.document.title = "Home | Admin Banginc";
      } else if (pathname === "/login") {
        window.document.title = "Login | Admin Banginc";
      } else if (pathname === "/message") {
        window.document.title = "Messages | Admin Banginc";
      }
       else if (pathname.startsWith("/project", 0)) {
        window.document.title = "Projects | Admin Banginc";
      } 
       else if (pathname.startsWith("/add-project", 0)) {
        window.document.title = "Add Project | Admin Banginc";
      } 
      else if (pathname.startsWith("/employee", 0)) {
        window.document.title = "Employees | Admin Banginc";
      }
      else if (pathname.startsWith("/add-employee", 0)) {
        window.document.title = "Add Employee | Admin Banginc";
      }
      else if (pathname.startsWith("/news", 0)) {
        window.document.title = "News | Admin Banginc";
      }
    }

    handleTitle();

    return () => {};
  }, [pathname]);
}

export default useTitle;
