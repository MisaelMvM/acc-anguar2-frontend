import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
	label = "Input 'VALUE' property:"
  bindedProperty1 = "This 'VALUE' property is coming from a variable in the component. ( [value]='bindedProperty1' )"
  bindedProperty2 = "This 'VALUE' property is coming from a variable in the component. ( value='{{bindedProperty2}}'' )"

  constructor() { }

  ngOnInit() {
  }

}
