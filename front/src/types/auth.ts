export interface Register {
  success: boolean;
  data?: { message: string };
  error?: string;
}

export type Logout = Register;

export interface User {
  id: number;
  username: string;
}

export interface Login {
  success: boolean;
  token?: string;
  data?: { message: string; token: string; user: User };
  error?: string;
}

export interface ChangePassword {
  oldPassword: string;
  newPassword: string;
  success: boolean;
  data?: { message: string };
  error?: string;
}
