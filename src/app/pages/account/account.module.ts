import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { EditComponent } from './edit/edit.component';
import { PwchangeComponent } from './pwchange/pwchange.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    EditComponent,
    PwchangeComponent,
    AccountComponent,
    // RootComponent,
  ],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
