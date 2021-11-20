import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { EditComponent } from './edit/edit.component';
import { PwchangeComponent } from './pwchange/pwchange.component';
import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: 'account',
    component: RootComponent,
    children: [
      { path: 'pwchange', component: PwchangeComponent },
      { path: 'edit', component: EditComponent },
      { path: '', component: AccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
