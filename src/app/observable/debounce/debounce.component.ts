import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput!: ElementRef;

  data!:null
  constructor(private loaddingBar:LoadingBarService) {}
  ngAfterViewInit(): void {
    const searchTerm = fromEvent(this.myInput.nativeElement, 'keyup').pipe(
      map((event:any)=>event.target.value),
      debounceTime(500),
  //  distinctUntilChanged()
    )
     searchTerm.subscribe((res) => {
      console.log(res);
      this.data=res
      this.loaddingBar.start();
      setTimeout(()=>{
        this.data=null
        this.loaddingBar.stop();
      },1000)
    });
  }

  ngOnInit(): void {}
}
