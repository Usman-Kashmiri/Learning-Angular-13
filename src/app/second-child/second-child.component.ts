import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  constructor() { }

  @Input() personAttr:{name:string,email:string,age:number} = {name:'',email:'',age:0}

  ngOnInit(): void {
  }

}
