import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myService:MyserviceService, private http: Http) {

  }
  date;
  data;
  fetched;
  fetchUser(){
     this.fetched =this.http.get("http://jsonplaceholder.typicode.com/users").
    map((response)=>{
      return response.json()
    })
this.fetched.subscribe((data)=>{
  console.log(data);
  this.myService.setUserData(data);
})
  }
ngOnInit(){
this.date=this.myService.showDate();
}

}
