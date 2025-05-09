import axios from "axios";
import { toast } from "react-toastify";

async function postJob(id, body) {
    console.log(id);
    
  const baseUrl = import.meta.env.VITE_BASE_URL;
  try {
    const { data } = await axios.post(baseUrl + "/api/v2/job/create", body, {
      headers: { Authorization: localStorage.getItem("Admin-token") },
    });
    return data;
  } catch (ex) {
    toast.error(ex.response.data.message);
  }
}

export default postJob