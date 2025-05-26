import axios from "axios";
import { toast } from "react-toastify";

// (method, endpoint, body=null, id=null )
async function myFetch(props) {
    
    const { method, endpoint, body = "", id = ""} = props
  const baseUrl = import.meta.env.VITE_BASE_URL;
  try {

    // create an item
    if (method === "post" && body) {
        
      const { data } = await axios.post(
        baseUrl + endpoint , body, {timeout: 20000, headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }
    // Get single item
   else if (method === "get" && id.length > 1 ) {
      const { data } = await axios.get(
        baseUrl + endpoint + `/${id}` ,  { headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }

    // Delete single item
   else if (method === "delete" && id ) {
      const { data } = await axios.delete(
        baseUrl + endpoint + `/${id}` ,  { headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }

    // Get all items
  else if (method === "get" && !id ) {
        
      const { data } = await axios.get(
        baseUrl + endpoint  ,  { headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }
  } catch (ex) {
    if(ex instanceof Error){
      console.log(ex);
      
    return toast.warning(ex.message)
    }
    toast.error(ex.message)
    localStorage.clear()
  }
}

export default myFetch;
 