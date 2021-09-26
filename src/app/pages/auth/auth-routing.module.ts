import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PwResetComponent } from './pw-reset/pw-reset.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent },
  { path: 'pw_reset', component: PwResetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
