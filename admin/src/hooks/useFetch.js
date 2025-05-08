import { useQuery } from "@tanstack/react-query";

function useFetch(queryKey, queryFn, id = "", body= null) {
  function returnFn() {
    return queryFn( id, body);
  }
  return useQuery({
    queryKey: [queryKey],
    queryFn: id ? returnFn : queryFn,
    staleTime: 5 * 60 * 1000,
  });
}

export default useFetch;
