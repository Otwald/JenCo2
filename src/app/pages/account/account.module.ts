import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { EditComponent } from './edit/edit.component';
import { PwchangeComponent } from './pwchange/pwchange.component';


@NgModule({
  declarations: [
    EditComponent,
    PwchangeComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
