import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  Arr3 = ['Pratik', 'Jaydip', 'Dharmik', 'Raj', 'Vishal', 'Tejash'];
  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    const namesource = from(this.Arr3);

    // const source = interval(2000)
    // Ex:01
    namesource.pipe(take(4)).subscribe((res) => {
      console.log(res);
      this.designService.print(res, 'elContainer');
    });

    // Ex:02
    namesource.pipe(takeLast(4)).subscribe((res) => {
      console.log(res);

      this.designService.print(res, 'elContainer2');
    });

    // Ex:03
    const source = interval(1000);

     let condition1 = timer(6000);
     let condition2 = fromEvent(document,'click')


    source
      .pipe(
        map((res) => 'number' + res),
        takeUntil(condition1)
        // takeUntil(condition2)

      ) 
      .subscribe((res) => {
        console.log(res);
         this.designService.print(res,'elContainer3')
      });
  }
}
