import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SecurityquestionComponent } from './securityquestion/securityquestion.component';
import { SetuppasswordComponent } from './setuppassword/setuppassword.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent },
  { path: 'account-details', component: AccountDetailsComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  {path: 'securityquestion', component: SecurityquestionComponent},
  {path: 'setuppassword', component: SetuppasswordComponent},
  {path: 'email-verification', component: EmailVerificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
