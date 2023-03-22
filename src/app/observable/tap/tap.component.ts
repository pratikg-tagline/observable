import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  source!: Subscription;
  source2!: Subscription;
  myColor:string=''
  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    const broadcastVideo = interval(2000);

    // Ex:01
    const Arr3 = ['Pratik', 'Jaydip', 'Dharmik', 'Raj', 'Vishal', 'Tejash'];

    const source = broadcastVideo
      .pipe(
        tap((res) => {
          console.log('tap before:>> ', +res);
          if (res == 4) {
            source.unsubscribe();
          }
        }),
        map((res) => Arr3[res]),
        tap((res) => console.log('tap :>> ', +res))
      )
      .subscribe((res) => {
        console.log(res);
        this.designService.print(res, 'elContainer');
      });

       // Ex:01
    const Colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    const source2 = broadcastVideo
      .pipe(
        tap((res) => {
          this.myColor= Colors[res];
          console.log('tap >> ', +res);
          if (res == 6) {
            source2.unsubscribe();
          }
        }),
        map((res) => Colors[res]),
        tap((res) => console.log('tap :>> ', +res))
      )
      .subscribe((res) => {
        console.log(res);
        this.designService.print(res, 'elContainer2');
      });
  }
}
