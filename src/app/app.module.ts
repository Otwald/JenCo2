import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DataprivacyComponent } from './pages/footer/dataprivacy/dataprivacy.component';
import { ImpressumComponent } from './pages/footer/impressum/impressum.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DataprivacyComponent,
    ImpressumComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
