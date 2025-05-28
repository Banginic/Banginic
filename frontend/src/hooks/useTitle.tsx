import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppProvider";


function useTitle() {

  const { pathname } = useLocation();
  
  
const appContext = useContext(AppContext)
  useEffect(() => {
    function handleTitle() {
      if(pathname ==='/login' && appContext?.user ){
        return appContext?.navigate('/')
      }
      if (pathname && pathname === "/") {
        window.document.title = "Banginc";
      } else if (pathname === "/login") {
        window.document.title = "Login | Banginc";
      } else if (pathname === "/message") {
        window.document.title = "Messages | Banginc";
      }
       else if (pathname.startsWith("/project", 0)) {
        window.document.title = "Projects | Banginc";
      } 
       else if (pathname.startsWith("/add-project", 0)) {
        window.document.title = "Add Project | Banginc";
      } 
      else if (pathname.startsWith("/employee", 0)) {
        window.document.title = "Employees | Banginc";
      }
      else if (pathname.startsWith("/add-employee", 0)) {
        window.document.title = "Add Employee | Banginc";
      }
      else if (pathname.startsWith("/news", 0)) {
        window.document.title = "News | Banginc";
      }
      // else if (pathname.startsWith("/services", 0)) {
      //   window.document.title = "Services | Banginc";
      // }
      // else if (pathname.startsWith("/about", 0)) {
      //   window.document.title = "About | Banginc";
      // }
      // else if (pathname.startsWith("/career", 0)) {
      //   window.document.title = "Careers | Banginc";
      // }
      else if (pathname.startsWith("/work", 0)) {
        window.document.title = "Projects | Banginc";
      }
    }

    handleTitle();

    return () => {};
  }, [pathname]);
}

export default useTitle;
