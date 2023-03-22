import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { combineLatest, fromEvent, map, pluck } from 'rxjs';

@Component({
  selector: 'app-combineletest',
  templateUrl: './combineletest.component.html',
  styleUrls: ['./combineletest.component.scss'],
})
export class CombineletestComponent implements OnInit, AfterViewInit {
  //sorces

  namesource: string[] = ['pratik', 'jaydip', 'dharmik'];
  colorsource: string[] = ['yellow', 'red', 'white'];

  //templete ref
  @ViewChild('name') name!: ElementRef;
  @ViewChild('item') color!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    const nameObs = fromEvent(this.name.nativeElement, 'change').pipe(
      map((event) => console.log('event :>> ', event))
    );
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value')
      // map((event:any)=>event.target.value)
    );

    //  ex:01 combinelatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createbox(name, color, 'elContainer');
    });
  }

  createbox(name: any, color: any, containerId: any) {
    let el = document.createElement('div');
    el.innerHTML = name;
    el.setAttribute('class', color);
    document.getElementById(containerId)?.appendChild(el);
  }

  ngOnInit(): void {}
}
