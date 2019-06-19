import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteComponent } from './componente/componente.component';
import {VerseriesComponent} from './verseries/verseries.component';
import {JugarComponent} from './jugar/jugar.component';

const routes: Routes = [
{path:'componente',component:ComponenteComponent},
{path:'verseries',component:VerseriesComponent},
{path:'jugar',component:JugarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
