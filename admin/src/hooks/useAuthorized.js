import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function useAuthorized() {

  const { baseUrl, setUser, token, navigate, setIsLoggedIn } =
    useContext(AppContext);

  useEffect(() => {
    async function fetchMe() {
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const { data } = await axios.get(baseUrl + "/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { success, message, admin } = data;
        if (!success) {
          toast.error(message);
          setUser(null);
          setIsLoggedIn(false);
          setTimeout(() => navigate("/login"), 1000);
        }
        setUser(admin);
      } catch (ex) {
        toast.error(ex.response.data.message);
      }
    }
    fetchMe();
    return () => {};
  }, []);
}

export default useAuthorized;
