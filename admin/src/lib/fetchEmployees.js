import { useContext } from "react"
import AppContext from "../context/AppContext"
import axios from "axios"

async function fetchEmployees(){
const { baseUrl, token } =  useContext(AppContext)
    try{
      const { data } = await axios.get(baseUrl + '/api/v2/employees/list', {
        headers : { Authorization: `Bearer ${token}`}
      })
      const { success, message, employees } = data
      
      if(!success){
       return setError(message)
      }
      setEmployees(employees)
      toast.success(message)
    }
    catch(ex){
      // toast.error(ex.response.data.message)
    }
   
   
   }
  export default fetchEmployees