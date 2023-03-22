import { Component, OnInit } from '@angular/core';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private designService:DesignService) { }
  exclusive:boolean=false
  ngOnInit(): void {
    this.designService.exclusive.subscribe((res)=>{
        this.exclusive=res
    })
  }

}
