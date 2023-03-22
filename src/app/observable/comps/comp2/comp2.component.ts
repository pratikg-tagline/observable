import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../services/design.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

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
