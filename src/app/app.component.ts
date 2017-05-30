import { Component } from '@angular/core';
import { DataService } from './data.service'
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = "Misael";

    ninja = {
  	name: "Yosh",
  	belt: "Black"
  }

  yell(e) {
  	alert("I am yelling!");
  	console.log(e);
  }
}

