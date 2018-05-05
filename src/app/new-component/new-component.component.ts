import { Component, OnInit, Input } from '@angular/core';
import {MyserviceService} from '../myservice.service'
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent  {

  @Input() data;
  // fetchedData = this.data;
  fetchedData;
  constructor(private service: MyserviceService){
console.log(service.subject)

  };
  ngOnInit(){
    this.service.subject.subscribe(data => {
      this.fetchedData = data;
    })
  }
  }
