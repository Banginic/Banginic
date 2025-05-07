import { useQuery } from "@tanstack/react-query";

function useFetch(queryKey, queryFn, id = "") {
  function returnFn() {
    return queryFn(id);
  }
  return useQuery({
    queryKey: [queryKey],
    queryFn: id ? returnFn : queryFn,
    staleTime: 5 * 60 * 1000,
  });
}

export default useFetch;
