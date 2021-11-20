import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { EditComponent } from './edit/edit.component';
import { PwchangeComponent } from './pwchange/pwchange.component';
import { AccountComponent } from './account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    EditComponent,
    PwchangeComponent,
    AccountComponent,
    RootComponent,
    // RootComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
})
export class AccountModule {}
