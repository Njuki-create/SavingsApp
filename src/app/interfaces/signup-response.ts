export interface SignupResponse {

  success: boolean;
  message: string;
  data: {
    pin: any;
    confirmPin: any;
    id: number;
    fullName: string;
    nationalId: string;
    dob: string;
    gender: string;
    phoneNumber: string;
    confirmPhoneNumber: string;
    email: string;
  };
}
