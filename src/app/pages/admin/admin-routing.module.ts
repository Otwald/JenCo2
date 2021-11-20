import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GeneralComponent } from './general/general.component';
import { TimeblocksComponent } from './timeblocks/timeblocks.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: 'general', component: GeneralComponent },
      { path: 'users', component: UsersComponent },
      { path: 'timeblocks', component: TimeblocksComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
