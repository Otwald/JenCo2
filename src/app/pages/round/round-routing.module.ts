import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RoundComponent } from './round.component';

const routes: Routes = [
  {
    path: 'round',
    component: RoundComponent,
    children: [
      { path: '', component: BaseComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'edit/:id', component: EditComponent },
      // { path: 'timeblocks', component: TimeblocksComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundRoutingModule {}
