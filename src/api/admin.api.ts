import apiClient from "@/lib/apiClient";
import type {
  ApiRsponse,
  ICourse,
  IDepartment,
  IInstructor,
  IProgram,
  ISemester,
  IUnivisity,
} from "@/types";

export function getAllUniversities() {
  return apiClient<ApiRsponse<IUnivisity[]>>("/admin/university");
}

export function getAllDepartments() {
  return apiClient<ApiRsponse<IDepartment[]>>("/admin/department");
}

export function getAllPrograms() {
  return apiClient<ApiRsponse<IProgram[]>>("/admin/program");
}

export function getAllInstructors() {
  return apiClient<ApiRsponse<IInstructor[]>>("/admin/instructor");
}

export function getAllCourses() {
  return apiClient<ApiRsponse<ICourse[]>>("/admin/course");
}

export function getAllSemesters() {
  return apiClient<ApiRsponse<ISemester[]>>("/admin/semester");
}
