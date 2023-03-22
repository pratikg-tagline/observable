import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  data:Data[]=[{
    name:"pratik",
    id:1
  },{
    name:"raj",
    id:2
  },{
    name:"yash",
    id:3
  }]
  constructor() { }
}
