import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundRoutingModule } from './round-routing.module';
import { RoundComponent } from './round.component';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    RoundComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    RoundRoutingModule
  ]
})
export class RoundModule { }
