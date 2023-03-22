import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { Common } from '../common';
//import { ConatainerInterface } from '../services/conatainer-interface';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
@Input() data:Common[]=[];
  @Input()
  p!: string;
@Output() press:EventEmitter<string>=new EventEmitter<string>();

startTime() {
  setTimeout(() => {
    alert('Alert activated');
  }, 5000);
}
cycle:number=0

dataservice:Data[]=[]
  constructor(private dataServiceService:DataServiceService) {
    // console.log("constructor");
   }
   

  ngOnInit(): void {
    this.dataservice=this.dataServiceService.data;
  }

  // ngOnInit(): void {
    
  //   console.log("ngOnInit");
  // }
  ngOnChanges():void {
    this.cycle++
    console.log("onchange");

  }
  ngDoCheck():void{
    console.log("docheck");

  }
  ngAfterContentInit( ):void{
    console.log("aftercontentinit");
  }
  ngAfterContentChecked( ):void{
    console.log("aftercontentchecked");
  }
  ngAfterViewInit( ):void{
    console.log("afterviewinit");
  }
  ngAfterViewChecked( ):void{
    console.log("afterviewchecked");
  }
  ngOnDestroy():void{
    console.log("destroy");
  }
  check(event:string){
    console.log("event")
    this.press.emit("pratik Ghoghari");
  }
}
