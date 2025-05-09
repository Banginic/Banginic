 import { toast } from "react-toastify";

 async function copyToClipboard(text){
    try{
      await navigator.clipboard.writeText(text);
      
      toast.success('Copied to clipboard')
      
    }
    catch(ex){
      toast.error('Failed to copy')
      console.log(ex);
      
    }

  }
  export default copyToClipboard;