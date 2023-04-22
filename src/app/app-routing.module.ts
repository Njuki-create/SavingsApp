import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SecurityquestionComponent } from './securityquestion/securityquestion.component';
import { SetuppasswordComponent } from './setuppassword/setuppassword.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { PortalComponent } from './portal/portal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', component: PortalComponent },
  {path: 'portal', component: PortalComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dashboard', component: DashboardComponent},
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
