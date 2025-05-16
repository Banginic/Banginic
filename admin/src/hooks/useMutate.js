import React, { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";
import { toast } from "react-toastify";
import AppContext from "../context/AppContext";

function useMutate(mutationFn, mutationKey, invalidationKey, link) {
  const { navigate } = useContext(AppContext);
  return useMutation({
    mutationKey,
    mutationFn,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [invalidationKey] });
      const timer = setTimeout(navigate(link), 2000);
      return () => clearTimeout(timer);
    },
  });
}

export default useMutate;
