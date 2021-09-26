import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PwResetComponent } from './pw-reset/pw-reset.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    LoginComponent,
    PwResetComponent,
    RegisterComponent,
    AccountComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
