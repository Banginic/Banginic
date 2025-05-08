import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../main'

function useMutate(mutationFn, mutationKey, mutationId, body=null) {
    
    function returnFn(){
        return mutationFn(mutationId, body)
    }

   return useMutation({
      mutationFn: returnFn,
      onError: (error) => console.log(error),
      onSuccess: (data) =>{
        console.log('success', data);
        queryClient.invalidateQueries(mutationKey)
      }
    })
  
}

export default useMutate
