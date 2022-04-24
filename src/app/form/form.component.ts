import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
// Jquery
import * as $ from "jquery";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userData:any = {}

  formData(data:NgForm) {
    // console.log(data)
    this.userData=data
    if (data == null) {
      $('.form-output').hide()
    } else {
      $('.form-output').show()
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
