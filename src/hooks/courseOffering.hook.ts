import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getAllCourseOffering } from "@/api";
import type { ICourseOfferingParams } from "@/types";

export function useGetAllCourseOffering(params: ICourseOfferingParams) {
  return useQuery({
    queryKey: ["courseOffering", params],
    queryFn: () => getAllCourseOffering(params),
  });
}

export function useSuspenseGetAllCourseOffering(params: ICourseOfferingParams) {
  return useSuspenseQuery({
    queryKey: ["suspenseCourseOffering", params],
    queryFn: () => getAllCourseOffering(params),
  });
}
