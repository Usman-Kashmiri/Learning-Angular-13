import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SwitchCasesComponent } from './switch-cases/switch-cases.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
// Form Module
import { FormsModule } from "@angular/forms";
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { ListProgramComponent } from './list-program/list-program.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCasesComponent,
    ForLoopComponent,
    StylebindingComponent,
    NavbarComponent,
    FormComponent,
    ToggleBtnComponent,
    ListProgramComponent,
    TwoWayBindingComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
