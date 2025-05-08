import axios from "axios";
import { toast } from "react-toastify";

async function createNews(id, body) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  try {
    const { data } = await axios.post(baseUrl + "/api/v2/news/create", body, {
     
      headers: {
        authorization: `Bearer ${localStorage.getItem("Admin-token")}`,
      },
    });
    return data;
  } catch (ex) {
    toast.error(ex.response.data.message);
  }
}

export default createNews;
