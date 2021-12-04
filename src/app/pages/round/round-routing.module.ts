import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { DetailsComponent } from './details/details.component';
import { RoundComponent } from './round.component';

const routes: Routes = [
  {
    path: 'round',
    component: RoundComponent,
    children: [
      { path: '', component: BaseComponent },
      { path: 'details/:id', component: DetailsComponent },
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
