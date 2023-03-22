import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck-op',
  templateUrl: './pluck-op.component.html',
  styleUrls: ['./pluck-op.component.scss'],
})
export class PluckOpComponent implements OnInit {
  data: any;
data2: any;

  constructor() {}

  ngOnInit(): void {
    const users = from([
      { name: 'pratik', city: 'surat', job: {title:'FD',exp:'10 years'} },
      { name: 'raj', city: 'bhavnagar', job: {title:'BD',exp:'1 years'}  },
      { name: 'jaydip', city: 'ahmdabad', job: {title:'FD',exp:'3 years'}  },
      { name: 'dharmik', city: 'baroda', job: {title:'BD',exp:'4 years'}  },
    ]);

    // #Ex:01
    users
      .pipe(
        // map(data=>data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
       // #Ex:02

       users.pipe(
        pluck('job','title'),
        toArray()
       ).subscribe((res)=>{
        console.log(res)
        this.data2=res
       })
  }
}
