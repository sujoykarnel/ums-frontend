import apiClient from "@/lib/apiClient";
import type { ApiRsponse, IDepartment, IUnivisity } from "@/types";

export function getAllUniversities() {
  return apiClient<ApiRsponse<IUnivisity[]>>("/admin/university");
}
export function getAllDepartments() {
  return apiClient<ApiRsponse<IDepartment[]>>("/admin/department");
}
