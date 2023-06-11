// What is expected from the DB
export interface LoginResponse {
  success: boolean;
  data: {
    phoneNumber: string;
    pin: string;
  };
}
