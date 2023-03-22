import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.scss'],
})
export class AsyncsubjectComponent implements OnInit {
  asyncvideoEmit: any;
  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    this.designService.asyncvideoEmit.subscribe((res) => {
      this.asyncvideoEmit = res;
    });
  }

  onvideoAdd(video: any) {
    console.log(video);
    this.designService.asyncvideoEmit.next(video);
  }

  //complete method
  onClick() {
    this.designService.asyncvideoEmit.complete();
  }
}
