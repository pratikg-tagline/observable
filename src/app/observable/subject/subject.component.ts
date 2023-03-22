import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit,OnDestroy {


  username!:string;
  constructor(private designService:DesignService) { }
 

  ngOnInit(): void {
    this.designService.exclusive.next(true)

    this.designService.username.subscribe((res)=>{
      console.log(res)
      this.username = res
    })
  }
  ngOnDestroy(): void {
    this.designService.exclusive.next(false)
  }
}
