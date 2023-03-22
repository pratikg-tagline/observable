import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  obsMsg!: any;
  constructor(private designService: DesignService) {}
   ngOnInit(): void {
    //of
    const obs1 = of('Pratik', 'Jaydip', 'Dharmik');
    obs1.subscribe((res) => {
      this.designService.print(res, 'elContainer');
    });
    const obs2 = of({ a: 'Pratik', b: 'Jaydip', c: 'Dharmik' });
    obs2.subscribe((res) => {
      this.obsMsg = res;
      this.designService.print('obsMsg => ', res);
    });

    //from
    const obs3 = from(['Pratik', 'Jaydip', 'Dharmik']);
    obs3.subscribe((res) => {
      this.designService.print(res, 'elContainer2');
    });
    //from-promise
      const promise =new Promise(resolve=>{
         setInterval(()=>{ 
           resolve("Promise Convert to Observable")
         },2000)
      })
    const obs4 = from(promise);
    obs4.subscribe((res) => {
      this.designService.print(res, 'elContainer3');
    });

    const obs5 = from('string Convert to Observable');
    obs5.subscribe((res) => {
      this.designService.print(res, 'elContainer4');
    });
  }
}
