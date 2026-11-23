import apiClient from "@/lib/apiClient";
import type {
  ApiRsponse,
  ICourseOffering,
  ICourseOfferingParams,
} from "@/types";

export function getAllCourseOffering(params: ICourseOfferingParams) {
  return apiClient<ApiRsponse<ICourseOffering[]>>("/course-offering", {
    params,
  });
}
