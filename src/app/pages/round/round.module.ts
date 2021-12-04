import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundRoutingModule } from './round-routing.module';
import { RoundComponent } from './round.component';
import { BaseComponent } from './base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [RoundComponent, BaseComponent, DetailsComponent],
  imports: [CommonModule, RoundRoutingModule, ReactiveFormsModule],
})
export class RoundModule {}
