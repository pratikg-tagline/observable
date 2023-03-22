import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-concatmerge',
  templateUrl: './concatmerge.component.html',
  styleUrls: ['./concatmerge.component.scss']
})
export class ConcatmergeComponent implements OnInit {

  constructor(private designService:DesignService) { }

  ngOnInit(): void {

    const sourcetech=interval(3000).pipe(map(v=>'techVideo #' + (v+1)),take(5));
    const sourcecomedy=interval(6000).pipe(map(v=>'comedyVideo #' + (v+1)),take(3));
    const sourcenews=interval(35000).pipe(map(v=>'newsVideo #' + (v+1)),take(4));
    const finalObs =concat(sourcetech,sourcecomedy,sourcenews)
    finalObs.subscribe((res)=>{
      this.designService.print(res,'elContainer')
      console.log(res)
    })
    
  }

}
