import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { TimeblocksComponent } from './timeblocks/timeblocks.component';
import { GeneralComponent } from './general/general.component';
import { CreateComponent } from './timeblocks/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminnavComponent } from 'src/app/layout/adminnav/adminnav.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    UsersComponent,
    TimeblocksComponent,
    GeneralComponent,
    CreateComponent,
    AdminComponent,
    AdminnavComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
