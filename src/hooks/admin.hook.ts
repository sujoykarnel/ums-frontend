import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  getAllCourses,
  getAllDepartments,
  getAllInstructors,
  getAllPrograms,
  getAllSemesters,
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
    queryKey: ["instructors"],
    queryFn: getAllInstructors,
  });
}

export function useSuspenseGetAllInstructors() {
  return useSuspenseQuery({
    queryKey: ["suspenseInstructors"],
    queryFn: getAllInstructors,
  });
}

export function useGetAllCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });
}

export function useSuspenseGetAllCourses() {
  return useSuspenseQuery({
    queryKey: ["suspenseCourses"],
    queryFn: getAllCourses,
  });
}

export function useGetAllSemesters() {
  return useQuery({
    queryKey: ["semesters"],
    queryFn: getAllSemesters,
  });
}

export function useSuspenseGetAllSemesters() {
  return useSuspenseQuery({
    queryKey: ["suspenseSemesters"],
    queryFn: getAllSemesters,
  });
}
