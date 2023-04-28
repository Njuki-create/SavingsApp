import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  sendMoney() {
    this.router.navigate(['/sendmoney']);
  }

  requestMoney() {
    this.router.navigate(['/requestmoney']);
  }

  budgetTracker() {
    this.router.navigate(['/budgettracker']);
  }

  expenseTracker() {
    this.router.navigate(['/expensetracker']);
  }

  mygoal() {
    this.router.navigate(['/goals']);
  }
}
