export interface LoginResponse {
  success: boolean;
  data: {
    phoneNumber: string;
    email: string;
  };
}
