import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { TimeblocksComponent } from './timeblocks/timeblocks.component';
import { GeneralComponent } from './general/general.component';
import { CreateComponent } from './timeblocks/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    TimeblocksComponent,
    GeneralComponent,
    CreateComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
