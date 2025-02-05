import { useQuery } from "@tanstack/react-query";
import getCabins from "../../services/apiCabins";
function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  return { isLoading, cabins, error };
}

export default useCabins;
