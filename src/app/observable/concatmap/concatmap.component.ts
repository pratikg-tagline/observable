import { Component, OnInit } from '@angular/core';
import { of, from, mergeMap, concatMap, concatAll, delay } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

  constructor(private designService:DesignService) { }
  getdata(data: string){
    return of(data + 'video upload').pipe(delay(2000))
  }
    ngOnInit(): void {
  
      const source = from(['tech','comedy','news'])
  
      source.pipe(
        concatMap (res=>this.getdata(res)),
        // map(res=>this.getdata(res)),
        // concatAll()
      ).subscribe((res)=>{
        this.designService.print(res,'elContainer')
        console.log(res)
      })
    }

}
