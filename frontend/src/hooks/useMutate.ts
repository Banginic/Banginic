import { useContext } from "react";
import { useMutation} from "@tanstack/react-query";
import type { MutateFunction } from "@tanstack/react-query";
import { queryClient } from "../main";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppProvider";


// interface Mutate{
//     method:string,
//     endpoint:string,
//     body: null | string,
//     id: string | null
// }


function useMutate(mutationFn: MutateFunction, mutationKey: string, invalidationKey : string, link: string) {
const appContext = useContext(AppContext)
  return useMutation({
    
    mutationKey: [mutationKey],
    mutationFn,
    onError: (error) => {
      console.log(error);
      
      toast.error(error.message);
    },
    onSuccess: (data) => {
      // toast.success(data?.message)
      console.log(data);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [invalidationKey] });
      const timer = setTimeout( () => appContext?.navigate(link), 2000);
      return () => clearTimeout(timer);
    },
  });
}

export default useMutate;
