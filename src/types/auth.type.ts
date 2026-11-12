export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegistrationPayload {
  name: string;
  email: string;
  phone?: string;
  password: string;
}

export interface VerifyAccountPayload {
  email: string;
  otp: string;
}
