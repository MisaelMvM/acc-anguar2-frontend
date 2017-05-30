import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  templateUrl: './custom-event-binding.component.html',
  styleUrls: ['./custom-event-binding.component.css']
})
export class CustomEventBindingComponent implements OnInit {
  @Input() data
  @Input() name

  @Output() onYell = new EventEmitter()

  fireYellEvent(e){
  	this.onYell.emit(e)
  }

  constructor() { }

  ngOnInit() {
  }

}
