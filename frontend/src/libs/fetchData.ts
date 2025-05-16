import axios from "axios";

interface StringMap {
  [key: string]: string;
}

interface Props{
    method: string;
    endpoint: string;
    id?: string;
    body?: StringMap
}


async function fetchData (props: Props){
    const { method, endpoint, id='', body=null} = props
     
    const baseUrl = import.meta.env.VITE_BASE_URL
    try{
        if( method === 'post' && body ){
            const { data } = await axios.post(baseUrl + endpoint, body)
            return data
        }
       else if( method === 'get' && id.length < 1 ){
            const { data } = await axios.get( baseUrl + endpoint )
            return data
        }
       else if ( method === 'get' && id.length > 1 ){
             const { data } = await axios.get( baseUrl + endpoint + `/${id}` )
            return data
        }
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error", error);
      }
    }

}


export default fetchData;