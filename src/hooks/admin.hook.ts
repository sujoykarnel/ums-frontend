import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getAllUniversities } from "@/api/admin.api";

export function useGetAllUniversities() {
  return useQuery({
    queryKey: ["univeristies"],
    queryFn: getAllUniversities,
  });
}
export function useSuspenseGetAllUniversities() {
  return useSuspenseQuery({
    queryKey: ["univeristies"],
    queryFn: getAllUniversities,
  });
}
