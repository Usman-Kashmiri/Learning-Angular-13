import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.css']
})
export class ToggleBtnComponent implements OnInit {

  display=true

  toggle() {
    this.display = !this.display
  }

  constructor() { }

  ngOnInit(): void {
  }

}
