import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  colors = ['red', 'blue', 'green']
  newColor:string

  addNew(color) {
    this.colors.push(color);
  }

  constructor() {  }

  ngOnInit() {
  }

}
