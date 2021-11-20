import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { TimeblocksComponent } from './timeblocks/timeblocks.component';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    TimeblocksComponent,
    GeneralComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
