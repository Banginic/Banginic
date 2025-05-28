import { useQuery } from "@tanstack/react-query";
import type { QueryFunction } from "@tanstack/react-query";

function useFetch(queryFn: QueryFunction, queryKey: string,) {

  return useQuery({
 
    queryKey: [queryKey],
    queryFn:  queryFn,
    staleTime: 5 * 60 * 1000,
  });
}

export default useFetch;
