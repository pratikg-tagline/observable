import { Component, OnInit } from '@angular/core';
import { interval, Subscribable, Subscription, timer } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg!: string;
  videoSubscribe!:Subscription;
  constructor(private designService:DesignService ) { }
ngOnInit(): void {
    // const broadCastVideo =interval(1000);
    // timer(delay,interval)
    const broadCastVideo =timer(5000,1000);
    this.videoSubscribe = broadCastVideo.subscribe(res =>{
    this.obsMsg ='video '+ res;
    this.designService.print(this.obsMsg,'elContainer')
    this.designService.print(this.obsMsg,'elContainer1')
    this.designService.print(this.obsMsg,'elContainer2')
    if(res>=5){
      this.videoSubscribe.unsubscribe()
    }
    })
   }

}
