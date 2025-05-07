import axios from "axios";
import { toast } from "react-toastify";

async function fetchMessages() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  try {
    const { data } = await axios.get(baseUrl + "/api/v2/messages/list", {
      headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}` },
    });
    return data;
  } catch (ex) {
    toast.error(ex.response.data.message);
  }
}

export default fetchMessages;
