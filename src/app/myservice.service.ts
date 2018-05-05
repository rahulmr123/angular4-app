import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class MyserviceService {
  fetchedData;
  public subject = new Subject<any>();
  constructor() { }
  showDate(){

  };
setUserData(data){
	this.subject.next(data);
}
}
