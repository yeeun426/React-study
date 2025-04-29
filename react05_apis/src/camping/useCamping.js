import { useQuery } from "@tanstack/react-query";
import { getCampingData } from "./getCampingApi";

export const useCamping = (page, perPage) => {
  return useQuery({
    queryKey: ["camping", page],
    queryFn: async () => await getCampingData(page, perPage),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};
