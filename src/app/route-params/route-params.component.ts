import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.css']
})
export class RouteParamsComponent implements OnInit {
  name:string

  constructor(private route: ActivatedRoute) { 
  	this.name = route.snapshot.params['params']
  }
  ngOnInit() {
  }

}
