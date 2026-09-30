export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: User[];
}