import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { RoundComponent } from './round.component';

const routes: Routes = [
  {
    path: 'round',
    component: RoundComponent,
    children: [
      { path: '', component: BaseComponent },
      // { path: 'general', component: GeneralComponent },
      // { path: 'users', component: UsersComponent },
      // { path: 'timeblocks', component: TimeblocksComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundRoutingModule {}
