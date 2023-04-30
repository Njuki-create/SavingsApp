import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SendmoneyService } from '../services/sendmoney.service';
import { Sendmoney } from '../interfaces/sendmoney';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.scss']
})
export class SendmoneyComponent {

  phoneNumber: number;
  challenge: number;
  amount: number;

  constructor(private router: Router, private sendmoneyservice: SendmoneyService) {}

  onSend() {
    const postData = {
      phoneNumber: this.phoneNumber,
      challenge: this.challenge,
      amount: this.amount,
    }
    this.sendmoneyservice.postData(postData).subscribe((response: any) => {
      // if (response.status== 'success') {
      //   alert('Successful')
      // }else {
      //   (error: any) => {
      //     alert('An Error Occu42004200rres. Please try again later');
      //   }
      // }
      alert('Successful');
    })
  }

}
