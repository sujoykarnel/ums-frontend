import apiClient from "@/lib/apiClient";
import type { ApiRsponse, IUnivisity } from "@/types";

export function getAllUniversities() {
  return apiClient<ApiRsponse<IUnivisity[]>>("/admin/university");
}
