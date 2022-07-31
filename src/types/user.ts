export interface UserEntity {
  name: string;
  surname: string;
  id: string;
  role: UserRole;
}

export enum UserRole {
  Admin = 1,
  Customer = 2,
}

export interface AuthLoginRequest {
  email: string;
  pwd: string;
}
