import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-sharereplay',
  templateUrl: './sharereplay.component.html',
  styleUrls: ['./sharereplay.component.scss'],
})
export class SharereplayComponent implements OnInit {
  constructor(private designService: DesignService) {}
  userlist01 = ['Angular1', 'Angular2'];
  userlist02: string[] = [];
  userlist03:string[] = [];

  //subscribemodes

  subscribrmode2: boolean = false;
  subscribrmode3: boolean = false;

  //subcription
  subscription2!: Subscription;
  subscription3!: Subscription;


  //togglemethod

  methodInterval:boolean=false;
  intSubscription!:Subscription

  ngOnInit(): void {
    this.designService.videoEmit.subscribe((res) => {
      console.log(res);
      this.userlist01.push(res);
    });
  }

  onvideoAdd(video: any) {
    // console.log(video)
    this.designService.videoEmit.next(video);
  }

  //user2subscribe btn
  user2subscribes() {
    if (this.subscribrmode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.designService.videoEmit.subscribe((res) => {
        // console.log(res)
        this.userlist02.push(res);
      });
    }this.subscribrmode2 = !this.subscribrmode2;
  }

  user3subscribes() {
    if (this.subscribrmode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.designService.videoEmit.subscribe((res) => {
        // console.log(res)
        this.userlist03.push(res);
      });
    }this.subscribrmode3 = !this.subscribrmode3;
  }

  //ToggleMethod

  toggleMethod(){

    const broadCastVideo =interval(1000);
if(this.methodInterval){
  this.intSubscription=broadCastVideo.subscribe((res)=>{
    this.designService.videoEmit.next('video'+res)
  })
}else{
  this.intSubscription.unsubscribe();
}
   
         this.methodInterval=!this.methodInterval
  }
}
