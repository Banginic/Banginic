import { useQuery } from "@tanstack/react-query";


function useFetch(queryKey, queryFn) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    staleTime: 5 * 60 * 1000
  })
}

export default useFetch
