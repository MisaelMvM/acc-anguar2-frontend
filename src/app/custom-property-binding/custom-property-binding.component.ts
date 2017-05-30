import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding',
  templateUrl: './custom-property-binding.component.html',
  styleUrls: ['./custom-property-binding.component.css']
})
export class CustomPropertyBindingComponent implements OnInit {
	data = "This text is coming from another component thru Custom-Property-Binding!"
	name = "Mark Zuckerberg"
	toggle = true

	yell(e) {
		alert("Changing jumbotron's background color!")
    this.toggle = !this.toggle
	}
  constructor() { }

  ngOnInit() {
  }

}
