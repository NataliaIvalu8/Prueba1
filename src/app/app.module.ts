import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { VerseriesComponent } from './verseries/verseries.component';
import { JugarComponent } from './jugar/jugar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    VerseriesComponent,
    JugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
