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
