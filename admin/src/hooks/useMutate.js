import React from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";
import { toast } from "react-toastify";

function useMutate(mutationFn, mutationKey) {
  return useMutation({
    mutationKey,
    mutationFn: mutationFn,
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(mutationKey);
    },
  });
}

export default useMutate;
