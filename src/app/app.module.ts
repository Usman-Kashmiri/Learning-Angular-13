import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchCasesComponent } from './switch-cases/switch-cases.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCasesComponent,
    ForLoopComponent,
    StylebindingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
