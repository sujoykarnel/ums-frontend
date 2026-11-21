import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  getAllDepartments,
  getAllInstructors,
  getAllPrograms,
  getAllUniversities,
} from "@/api";

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

export function useGetAllPrograms() {
  return useQuery({
    queryKey: ["programs"],
    queryFn: getAllPrograms,
  });
}

export function useSuspenseGetAllPrograms() {
  return useSuspenseQuery({
    queryKey: ["suspensePrograms"],
    queryFn: getAllPrograms,
  });
}

export function useGetAllInstructors() {
  return useQuery({
    queryKey: ["programs"],
    queryFn: getAllInstructors,
  });
}

export function useSuspenseGetAllInstructors() {
  return useSuspenseQuery({
    queryKey: ["suspensePrograms"],
    queryFn: getAllInstructors,
  });
}
