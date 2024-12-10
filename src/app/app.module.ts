import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdressComponent } from './composants/adress/adress.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { HomeComponent } from './composants/home/home.component';
import { LinkComponent } from './comosants/link/link.component';
import { DropdownComponent } from './comosants/dropdown/dropdown.component';
import { DisabledComponent } from './comosants/disabled/disabled.component';

@NgModule({
  declarations: [
    AppComponent,
    AdressComponent,
    StagiaireComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LinkComponent,
    DropdownComponent,
    DisabledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
