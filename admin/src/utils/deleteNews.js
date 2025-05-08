import axios from "axios";
import { toast } from "react-toastify";

async function deleteNews( newsId ) {

    
    const baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const { data } = await axios.delete(baseUrl + `/api/v2/news/delete/${newsId}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}` },
      });
      return data;
    } catch (ex) {
      toast.error(ex.response.data.message);
    }
}

export default deleteNews
 