export interface Sendmoney {
  status: boolean;
  data: {
    phoneNumber: number;
    challenge: number;
    amount: number;
  }
}
