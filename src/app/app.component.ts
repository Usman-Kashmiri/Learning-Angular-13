import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '13.1.4';
  count=0;
  show=true;
  color='';
  inputData:any;
  lowerCaseData = 'LOWERCASE DATA';
  upperCaseData = 'uppercase data';
  dayToday = Date();
  persons = [
    {name:'Usman',email:'usman@angular.com',age:21},
    {name:'Yasir',email:'yasir@angular.com',age:20},
    {name:'Abdul Rafay',email:'arm@angular.com',age:24},
  ];
}