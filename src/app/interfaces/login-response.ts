export interface LoginResponse {
  success: boolean;
  data: {
    phoneNumber: string;
    pin: string;
  };
}
