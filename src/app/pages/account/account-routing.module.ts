import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { EditComponent } from './edit/edit.component';
import { PwchangeComponent } from './pwchange/pwchange.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
  },
  { path: 'account/pwchange', component: PwchangeComponent },
  { path: 'account/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
