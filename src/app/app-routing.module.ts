import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { MenuComponent } from './composants/menu/menu.component';
import { AdressComponent } from './composants/adress/adress.component';
import { HomeComponent } from './composants/home/home.component';
import { HeaderComponent } from './composants/header/header.component';
import { DisabledComponent } from './composants/disabled/disabled.component';


const routes: Routes = [
  {path:'stagiaire',component:StagiaireComponent},
  {path:'menu',component:MenuComponent},
  {path:'adress',component:AdressComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'cart',component:DisabledComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

