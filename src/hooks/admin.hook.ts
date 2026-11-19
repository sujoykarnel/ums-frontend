import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getAllDepartments, getAllUniversities } from "@/api";

export function useGetAllUniversities() {
  return useQuery({
    queryKey: ["univeristies"],
    queryFn: getAllUniversities,
  });
}
export function useSuspenseGetAllUniversities() {
  return useSuspenseQuery({
    queryKey: ["suspenseUniveristies"],
    queryFn: getAllUniversities,
  });
}

export function useGetAllDepartments() {
  return useQuery({
    queryKey: ["departments"],
    queryFn: getAllDepartments,
  });
}
export function useSuspenseGetAllDepartments() {
  return useSuspenseQuery({
    queryKey: ["suspenseDepartments"],
    queryFn: getAllDepartments,
  });
}
