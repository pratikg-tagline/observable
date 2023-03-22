import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, filter, map, pluck, Subscription, switchMap } from 'rxjs';
import { Search } from '../common/search';
import { ErrorService } from '../services/error.service';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-switchmap-search',
  templateUrl: './switchmap-search.component.html',
  styleUrls: ['./switchmap-search.component.scss']
})
export class SwitchmapSearchComponent implements OnInit ,AfterViewInit{

  @ViewChild('searchform') searchform!: NgForm

  searchResults: any
  searchResultsCount: any
  err:any
  constructor(private searchService:SearchService,private erorService: ErrorService) { }


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
   
    // this.searchService.getSearches('angular').subscribe((res)=>{
    //   console.log(res)
      
    // })
    const formvalue = this.searchform.valueChanges;

    formvalue?.pipe(
      //  map(data=>data.searchterm)
      filter(():any=>this.searchform.valid),
      pluck('searchterm'),
      debounceTime(500),  
      distinctUntilChanged(),
      switchMap(data=>this.searchService.getSearches(data)),
      catchError(this.erorService.handleError)
    ).subscribe((res)=>{
     this.searchResults=res;
     this.searchResultsCount=Object.keys(res).length;
    },
    (err)=>{
      this.err = err
    }
    )
  }

}
