import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  ParentsData = 0;

  persons = [
    {name:'Usman',email:'usman@angular.com',age:21},
    {name:'Yasir',email:'yasir@angular.com',age:20},
    {name:'Abdul Rafay',email:'arm@angular.com',age:24},
  ]

  data='';

  updateData(item:string) {
    this.data=item;
  }

  randomNumber() {
    this.ParentsData = Math.floor(Math.random()*100)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
