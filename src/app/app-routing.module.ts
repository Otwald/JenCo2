import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataprivacyComponent } from './pages/footer/dataprivacy/dataprivacy.component';
import { ImpressumComponent } from './pages/footer/impressum/impressum.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'dataprivacy', component: DataprivacyComponent },
  { path: 'welcome', component: HomeComponent },
  // {path: 'round' , component : },
  // {path: 'admin' , component : },
  // {path: 'login' , component : },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
