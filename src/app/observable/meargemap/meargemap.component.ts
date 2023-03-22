import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-meargemap',
  templateUrl: './meargemap.component.html',
  styleUrls: ['./meargemap.component.scss']
})
export class MeargemapComponent implements OnInit {

  constructor(private designService:DesignService) { }
getdata(data: string){
  return of(data + 'video upload')
}
  ngOnInit(): void {

    const source = from(['tech','comedy','news'])

    source.pipe(
      mergeMap(res=>this.getdata(res)),
      // map(res=>this.getdata(res)),
      // mergeAll()
    ).subscribe((res)=>{
      this.designService.print(res,'elContainer')
      console.log(res)
    })
  }

}
