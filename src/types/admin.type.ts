export interface IUnivisity {
  id: string;
  name: string;
  shortName: string;
  address: null | string;
  email: null | string;
  phone: null | string;
  isDelete: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
}
export interface IDepartment {
  id: string;
  name: string;
  code: string;
  universityId: string;
  isDelete: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
}

export interface IProgram {
  id: string;
  name: string;
  code: string;
  duration: number;
  totalCredits: number;
  departmentId: number;
  department: IDepartment;
  universityId: string;
  isDelete: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
}

export interface IAdditionalFile {
  url: string;
  publicId: string;
}

export interface IInstructor {
  id: string;
  name: string;
  email: string;
  address: string;
  resume: string;
  resumePublicId: string;
  additionalFiles: AdditionalFile[];
  userId: string;
  departmentId: string;
  isDeleted: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
  department: IDepartment;
}
