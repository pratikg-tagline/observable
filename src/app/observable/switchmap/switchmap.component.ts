import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private designService:DesignService) { }
  getdata(data: string){
    return of(data + 'video upload').pipe(delay(1000))
  }
    ngOnInit(): void {
  
      const source = from(['tech','comedy','news'])
  
      source.pipe(
        mergeMap(res=>this.getdata(res)),
        //  concatMap(res=>this.getdata(res)),
         switchMap(res=>this.getdata(res)),
        // map(res=>this.getdata(res)),
        // switchAll()
      ).subscribe((res)=>{
        this.designService.print(res,'elContainer')
        console.log(res)
      })
    }
}
