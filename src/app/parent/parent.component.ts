import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  ParentsData=0;

  randomNumber() {
    this.ParentsData = Math.floor(Math.random()*10)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
