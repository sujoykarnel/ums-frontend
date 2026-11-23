import type {
  ICourse,
  IInstructor,
  ISemester,
  SemesterStatus,
} from "./admin.type";

export interface ICourseOffering {
  id: string;
  courseId: string;
  semesterId: string;
  instructorId: string;
  courseFee: number;
  totalSeat: number;
  availableSeat: number;
  isDeleted: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
  course: ICourse;
  semester: ISemester;
  instructor: IInstructor;
}

export interface ICourseOfferingParams {
  semesterStatus?: SemesterStatus;
  page?: number;
  limit?: number;
  searchTerm?: string;
  sortOrder?: "desc" | "asc";
  sortBy?: string;
}
