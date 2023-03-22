import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { DesignService } from '../services/design.service';

export interface View {
  name: string;
  title: string;
}
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  private user: View[] = [
    { name: 'pratik', title: 'javascript' },
    { name: 'Raj', title: 'java' },
    { name: 'Jaydip', title: 'c' },
    { name: 'Dharmik', title: 'python' },
  ];

  videoSubscribe!: Subscription;
  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    // Ex:1
    const broadCastVideo = interval(1000);
    this.videoSubscribe = broadCastVideo.pipe(take(5), toArray()).subscribe((res) => {
      this.designService.print(res,'elContainer');
        console.log(res);
      });
    // Ex:2
    let source2 = from(this.user);
    source2.pipe(toArray()).subscribe((res) => {
      this.designService.print(res,'elContainer1');
      console.log(res);
    });
    // Ex:3
    let source3 = of('jasmin', 'raja', 'jay');
    source3.pipe(toArray()).subscribe((res) => {
      this.designService.print(res,'elContainer2');
      console.log(res);
    });
  }
}
