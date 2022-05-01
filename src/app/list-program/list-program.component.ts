import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css']
})
export class ListProgramComponent implements OnInit {

  list:any[] = []

  AddListItem(item:string) {
    this.list.push(item)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
