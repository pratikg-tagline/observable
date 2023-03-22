import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Search } from '../common/search';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url ='https://my-json-server.typicode.com/Uxtrendz/apis/videoList'
  constructor(private http:HttpClient ,private  errorService:ErrorService) { }

 getSearches(searchterm:any):Observable<Search>{
  return this.http.get<Search>(this.url + '?q='  + searchterm).pipe(
    catchError(this.errorService.handleError)
  )
 }
}
