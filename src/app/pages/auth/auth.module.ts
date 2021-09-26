import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PwResetComponent } from './pw-reset/pw-reset.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, PwResetComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
