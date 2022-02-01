import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchCasesComponent } from './switch-cases/switch-cases.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCasesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
