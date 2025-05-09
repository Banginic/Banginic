import axios from "axios";
import { toast } from "react-toastify";

// (method, endpoint, body=null, id=null )
async function myFetch(props) {
    const { method, endpoint, body = "", id = ""} = props
  const baseUrl = import.meta.env.VITE_BASE_URL;
  try {

    // create an item
    if (method === "post") {
        console.log('method callled');
        
        console.log(method, body, endpoint);
        
      const { data } = await axios.post(
        baseUrl + endpoint , body, { headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }
    // Get single item
    if (method === "get" && id ) {
      const { data } = await axios.get(
        baseUrl + endpoint + `/${id}` ,  { headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }

    // Delete single item
    if (method === "delete" && id ) {
      const { data } = await axios.delete(
        baseUrl + endpoint + `/${id}` ,  { headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }

    // Get all items
    if (method === "get" && !id ) {
      const { data } = await axios.get(
        baseUrl + endpoint  ,  { headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}`} });
      return data;
    }
  } catch (ex) {
    toast.error(ex.response.data.message);
  }
}

export default myFetch;
 