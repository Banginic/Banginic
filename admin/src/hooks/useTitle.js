import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    function handleTitle() {
      if (pathname === "/") {
        window.document.title = "Home | Admin Banginc";
      } else if (pathname === "/login") {
        window.document.title = "Login | Admin Banginc";
      } else if (pathname === "/messages") {
        window.document.title = "Login | Admin Banginc";
      } else if (pathname === "/projects") {
        window.document.title = "Projects | Admin Banginc";
      } else if (pathname.startsWith("/employee", 0)) {
        window.document.title = "Employees | Admin Banginc";
      }
    }

    handleTitle();

    return () => {};
  }, [pathname]);
}

export default useTitle;
