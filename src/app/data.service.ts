import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

    constructor(private http: Http) { }
    
    fetchData(){
    	var dataSave = [];
    	this.http.get('http://127.0.0.1:8000/api/data2').forEach(
    		(data) => dataSave.push(data)
    		);
        console.log("HERE");
    	console.log(dataSave);
    	console.log("HERE");
    	return this.http.get('http://127.0.0.1:8000/api/data2').subscribe(
                (data) => console.log("Misa Misa")
    		);
    }
}
