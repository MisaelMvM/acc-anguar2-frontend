import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  start() {
  	alert("This alert was triggered by a click-event!")
  }
  constructor() { }

  ngOnInit() {
  }

}
