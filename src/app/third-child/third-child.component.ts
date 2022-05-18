import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.css']
})
export class ThirdChildComponent implements OnInit {

  constructor() { }

  @Output() updateFunction = new EventEmitter();

  ngOnInit(): void {
  }

}
