import axios from "axios";
import { toast } from "react-toastify";

async function deleteEmployee( employeeId ) {

    
    const baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const { data } = await axios.delete(baseUrl + `/api/v2/employees/delete/${employeeId}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("Admin-token")}` },
      });
      return data;
    } catch (ex) {
      toast.error(ex.response.data.message);
    }
}

export default deleteEmployee
 