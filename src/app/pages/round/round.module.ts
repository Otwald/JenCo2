import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundRoutingModule } from './round-routing.module';
import { RoundComponent } from './round.component';
import { BaseComponent } from './base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [RoundComponent, BaseComponent, DetailsComponent, EditComponent],
  imports: [CommonModule, RoundRoutingModule, ReactiveFormsModule],
})
export class RoundModule {}
