import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  msg1!: string;
  msg2!: any;
  sub1!: Subscription;
  sub2!: Subscription;

  constructor(private designService:DesignService) {}

  ngOnInit(): void {
    const broadCastVideo = interval(1000);

    //Ex:01
    this.sub1 = broadCastVideo
      .pipe(map((data) => 'video' + data))
      .subscribe((res) => {
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
      }, 10000);

    //Ex:02x  

    this.sub2 = broadCastVideo
      .pipe(map((data) => data * 5))
      .subscribe((res) => {
        this.msg2 = res;
      });
    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

     //Ex:03
      
     const members =from([
     {name:'pratik',city:'surat'},
     {name:'raj',city:'bhavnagar'},
     {name:'jaydip',city:'ahmdabad'},
     {name:'dharmik',city:'baroda'}])
   
    members.pipe(
      map(data=>data.name)
     ).subscribe((res)=>{
     this.designService.print(res,'elContainer')
     })

  }
}
