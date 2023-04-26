import { Component } from '@angular/core';

@Component({
  selector: 'app-expensetracker',
  templateUrl: './expensetracker.component.html',
  styleUrls: ['./expensetracker.component.scss']
})
export class ExpensetrackerComponent {

  dailyExpense: string = '';
  dailyExpenseAmount: string = '';
  dailyExpenseDescription: string = '';
  monthlyExpense: string = '';
  monthlyExpenseAmount: string = '';
  monthlyExpenseDescription: string = '';
  yearlyExpense: string = '';
  yearlyExpenseAmount: string = '';
  yearlyExpenseDescription: string = '';

  dailyExpenses: any[] = [];
  monthlyExpenses: any[] = [];
  yearlyExpenses: any[] = [];
  showDailyExpense: any;
  userInput: string;


  constructor() {}

  // Daily Expenses
  addDailyExpense() {
    this.dailyExpenses.push({amount: this.dailyExpenseAmount, description: this.dailyExpenseDescription});
    this.userInput = this.dailyExpenseDescription + ' - $' + this.dailyExpenseAmount;
    this.dailyExpenseAmount = '';
    this.dailyExpenseDescription = '';

    // Calculate total daily expenses
    // let total = 0;
    // for (let expense of this.dailyExpenses) {
    //   total += parseInt(expense.amount);
    // }
    // this.dailyExpense = '$' + total;
  }

  editDailyExpense() {

  }
  deleteDailyExpense() {

  }

  // Monthly Expenses
  addMonthlyExpense() {
    this.monthlyExpenses.push({amount: this.monthlyExpenseAmount, description: this.monthlyExpenseDescription});
    this.userInput = this.monthlyExpenseDescription + ' - $' + this.monthlyExpenseAmount;
    this.monthlyExpenseAmount = '';
    this.monthlyExpenseDescription = '';

    // Calculate total monthly expenses
    // let total = 0;
    // for (let expense of this.monthlyExpenses) {
    //   total += parseInt(expense.amount);
    // }
    // this.monthlyExpense = '$' + total;
  }

  editMonthlyExpense() {

  }
  deleteMonthlyExpense() {

  }

  // Yearly Expenses
  addYearlyExpense() {
    this.yearlyExpenses.push({amount: this.yearlyExpenseAmount, description: this.yearlyExpenseDescription});
    this.userInput = this.yearlyExpenseDescription + ' - $' + this.yearlyExpenseAmount;
    this.yearlyExpenseAmount = '';
    this.yearlyExpenseDescription = '';

    // Calculate total yearly expenses
    // let total = 0;
    // for (let expense of this.yearlyExpenses) {
    //   total += parseInt(expense.amount);
    // }
    // this.yearlyExpense = '$' + total;
  }
  editYearlyExpense() {

  }
  deleteYearlyExpense() {

  }

}
