import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestmoney',
  templateUrl: './requestmoney.component.html',
  styleUrls: ['./requestmoney.component.scss']
})
export class RequestmoneyComponent {

constructor(private router: Router) {}

requestMoney() {
  this.router.navigate(['/requestmoney']);
}

}
