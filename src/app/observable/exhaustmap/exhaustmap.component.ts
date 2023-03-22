import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss']
})
export class ExhaustmapComponent implements OnInit,AfterViewInit {
num=0;

  constructor(private http:HttpClient , private designService:DesignService) { }
 
  @ViewChild('addBtn') addBtn!:ElementRef;
   url='./../../../assets/data.json';
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
   fromEvent(this.addBtn.nativeElement,'click').pipe(

   ).subscribe((res)=>{
console.log(res)
   })
  }
  onSave(changes:any){
    return this.http.put(this.url,{data:changes})
    
    // return this.http.put('./../../../assets/data.json',{data:changes})
  }

//   btnClick(){
//  this.onSave(this.num++).subscribe((res)=>{
//   console.log(res)
//  })
//     }

  }

