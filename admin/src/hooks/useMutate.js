import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";
import { toast } from "react-toastify";
import AppContext from "../context/AppContext";

function useMutate(mutationFn, mutationKey) {
 const { setJobs } = useContext(AppContext)
  return useMutation({
    mutationKey,
    mutationFn: mutationFn,
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      if(data.jobs){
        setJobs(data.jobs)
      }
      toast.success(data.message);
      queryClient.invalidateQueries(mutationKey);
    },
  });
}

export default useMutate;
