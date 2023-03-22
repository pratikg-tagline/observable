import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';
import { DesignService } from '../services/design.service';

@Component({
  selector: 'app-concatmapnotification',
  templateUrl: './concatmapnotification.component.html',
  styleUrls: ['./concatmapnotification.component.scss']
})
export class ConcatmapnotificationComponent implements OnInit {

  constructor(private designService:DesignService) { }

notifyData = [
  {
    name:'Facebook',
    time:'4 Second Ago...',
    strong:'Pratik Ghoghari',
    p:'Lorem Ipsum is simply dummy text of the printing '
  },
  {
    name:'Facebook',
    time:'3 Second Ago...',
    strong:'Jaydip Hadiya',
    p:'Lorem Ipsum is simply dummy text of the printing'
  },
  {
    name:'Facebook',
    time:'2 Second Ago...',
    strong:'Dharmik',
    p:'Lorem Ipsum is simply dummy text of the printing' 
  },
  {
    name:'Facebook',
    time:'1 Second Ago...',
    strong:'Vishal Variya',
    p:'Lorem Ipsum is simply dummy text of the printing '
  }
]

  ngOnInit(): void {

    from(this.notifyData).pipe(
      concatMap(res=>this.getHtml(res))
    ).subscribe((res)=>{
      console.log(res)
      this.designService.print2(res,'elContainer')
    })
   
  }

  getHtml(data: any){
   return of(` <div style='border:1px solid black; background: white; margin:10px 0; '>
   <div class="header d-flex justify-content-between " '>
    <div class="app">
            ${data.name}
    </div>
    <div class="time">
    ${data.time}
    </div>
    </div>
    <div class="body">
     <strong>   ${data.strong}</strong>
     <p>   ${data.p}</p>
</div>
</div>
`).pipe(delay(2000))
  }

}
