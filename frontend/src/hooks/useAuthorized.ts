import axios, { AxiosError } from "axios";

import { useQuery } from "@tanstack/react-query";

async function useAuthorized() {
    
    async function fetchDetails() {
      if(!localStorage.getItem('token')) return null;

    const baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const { data } = await axios.get(baseUrl + "/api/v2/client/me", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      });
     
      
      return data ;

    } catch (ex) {
      if (ex instanceof Error) {
        localStorage.clear();
        console.log(ex);
        
      }
      if (ex instanceof AxiosError) {
        localStorage.clear();
             

      }
    }
  }

  const { data, isError } = useQuery({
    queryKey: ["Authorzed"],
    queryFn: fetchDetails,
    staleTime: 5 * 60 * 1000,
  });
  if(data && data?.error === 'jwt expired'){
    localStorage.clear()
    return;
  }
 
  

  if (!data?.success) {
  return  localStorage.removeItem('user')
  }
  if (isError) {
      return  localStorage.removeItem('user')

  }
  const { user, token } = data;
  localStorage.setItem("token", token);
  localStorage.setItem('user', JSON.stringify(user));
}

export default useAuthorized;
