import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css'],
})
export class ForLoopComponent implements OnInit {
  shapatar = [
    'Shani chilguza',
    'Yasir Wasooli',
    'ARM JF-17 Thunder',
    'Asim Sanata',
  ];
  gral = { name: 'Ayesha', age: 14, class: 8 };
  students = [
    {
      name: 'Abid mushtaq',
      age: 22,
      class: 'BA 1st year',
      subjects: [
        'English (major)',
        'Criminology (minor)',
        'IR (minor)',
        'Mass Com (minor)',
      ],
    },
    {
      name: 'Nasir noman',
      age: 23,
      class: 'BA 1st year',
      subjects: [
        'Political Science (major)',
        'English (minor)',
        'IR (minor)',
        'Mass Com (minor)',
      ],
    },
    {
      name: 'Ayesha Ibrahim',
      age: 21,
      class: 'BA 2nd year',
      subjects: [
        'International Relations (major)',
        'Criminology (minor)',
        'English (minor)',
        'Mass Com (minor)',
      ],
    },
    {
      name: 'Shabeer Shahab',
      age: 25,
      class: 'BA 3rd year',
      subjects: [
        'Mass Com (major)',
        'English (minor)',
        'IR (minor)',
        'Political Science (minor)',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
