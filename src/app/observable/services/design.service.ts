import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {


  exclusive= new Subject<boolean>();

  username= new BehaviorSubject<string>('Pratik');

  videoEmit= new ReplaySubject<string>(5,5000);

  asyncvideoEmit= new AsyncSubject<string>();
  constructor() { }
  print(val:any,ContainerId:any){
    let el=document.createElement('li')
    el.innerHTML=val;
    document.getElementById(ContainerId)?.appendChild(el)
  }
  print2(val:any,ContainerId:any){
    let el=document.createElement('div')
    el.setAttribute('class','item')
    el.innerHTML=val;
    document.getElementById(ContainerId)?.prepend(el)
  }
}
