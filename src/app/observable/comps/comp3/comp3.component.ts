import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  // username: string = 'Pratik';
  username!:string;
  constructor(private designService: DesignService) {
    this.designService.username.subscribe((res) => {
      // console.log(res)
      this.username = res;
    });
  }

  ngOnInit(): void {}
  onChange(uname: any) {
    //  console.log(uname.value) ;
    this.designService.username.next(uname.value);
  }

}
