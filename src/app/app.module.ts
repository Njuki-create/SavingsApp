import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SecurityquestionComponent } from './securityquestion/securityquestion.component';
import { SetuppasswordComponent } from './setuppassword/setuppassword.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { PortalComponent } from './portal/portal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendmoneyComponent } from './sendmoney/sendmoney.component';
import { RequestmoneyComponent } from './requestmoney/requestmoney.component';
import { ExpensetrackerComponent } from './expensetracker/expensetracker.component';
import { BudgettrackerComponent } from './budgettracker/budgettracker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountDetailsComponent,
    PersonalDetailsComponent,
    SecurityquestionComponent,
    SetuppasswordComponent,
    EmailVerificationComponent,
    PortalComponent,
    ContactusComponent,
    AboutComponent,
    DashboardComponent,
    SendmoneyComponent,
    RequestmoneyComponent,
    ExpensetrackerComponent,
    BudgettrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
