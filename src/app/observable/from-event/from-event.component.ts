import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private designService:DesignService) { }
  @ViewChild('addBtn') addBtn!:ElementRef;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe((res)=>{
      let countVal='video'+count++
      console.log(countVal)
      this.designService.print(countVal,'elContainer')
      this.designService.print(countVal,'elContainer2')
    })
  }
}
  