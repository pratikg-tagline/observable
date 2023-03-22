import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit {
  sub2!: Subscription;
  techStatus!: string;
  techStatus2!: string;
  names!:string;
  nameStates!:string;

  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    // Ex:01(manual)
    const data = new Observable<string>((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 2000);
      setTimeout(() => {
        observer.next('TypeScript');
      }, 4000);
      setTimeout(() => {
        observer.next('Html and Css');
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.next('Javascript');
      }, 8000);
      setTimeout(() => {
        observer.next('Python');
        observer.error(new Error('Limit'));
      }, 10000);
    });
    data.subscribe(
      (res) => {
        this.designService.print(res, 'elContainer');
      },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

    // Ex:02(Custom Interval)
    const Arr2 =['Angular','Javascript','Python','Html and Css','TypeScript']
    const cusObs2 = new Observable<string>((observer: Observer<string>) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);
        count++;
        if (count >= 3) {
          observer.error('error emit');
        }
        if (count >= 5) {
          observer.complete();
        }
      }, 1000);
    });
    this.sub2 = cusObs2.subscribe((res) => {
      this.designService.print(res, 'elContainer2');
    },
    (err) => {
      this.techStatus2 = 'error';
    },
    () => {
      this.techStatus2 = 'completed';
    });

    // Ex:03(Random Interval)
    const Arr3 =['Pratik','Jaydip','Dharmik','Raj','Vishal','Tejash']
    const cusObs3 = new Observable<string>((observer: Observer<string>) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);
        count++;
        if (count >= 3) {
          // observer.error('error emit');
        }
        if (count >= 6) {
          observer.complete();
        }
      }, 1000);
    });
    cusObs3.subscribe((res)=>{
   this.names=res
   },
    (err) => {
      this.nameStates = 'error';
    },
    () => {
      this.nameStates = 'completed';
    })
  }
}
