import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-securityquestion',
  templateUrl: './securityquestion.component.html',
  styleUrls: ['./securityquestion.component.scss']
})
export class SecurityquestionComponent {
  constructor (private router: Router) {

  }
  onContinue() {
    this.router.navigate(['/setuppassword']);
  }
  
}
