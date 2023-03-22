import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
data: any;
data2: any;
data3: any;

  constructor() { }

  ngOnInit(): void {

    const arraydata =[
      { id:1, name:"Abraham", age:20,gender:"male"},
      { id:2, name:"Annie", age:25,gender:"female"},
      { id:3, name:"Ryan", age:40,gender:"male"},
      { id:4, name:"Wayne", age:31,gender:"male"},
      { id:5, name:"Paul", age:45,gender:"male"},
      { id:6, name:"Pratik", age:40,gender:"male"},
      { id:7, name:"Raj", age:34,gender:"female"},
      { id:8, name:"Jaydip", age:50,gender:"male"}
      ];

      const source =from(arraydata)

      // # Ex:01

      source.pipe(
        filter(menubar=>menubar.name.length >3),
        toArray()
      ).subscribe((res)=>{
         this.data=res
      })

       // # Ex:02

       source.pipe(
        filter(menubar=>menubar.gender=='male'),
        toArray()
      ).subscribe((res)=>{
         this.data2=res
      })

// # Ex:03
      source.pipe(
        filter(menubar=>menubar.id<=6),
        toArray()
      ).subscribe((res)=>{
         this.data3=res
      })
  }

}
