import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  handleError(err: HttpErrorResponse) {
    console.log(err);
    let errMsg = '';
    if (!err.error || !err.error.error) {
      console.log('network error');
      errMsg = 'there is some unknown error. please try again after some time ';
    } else {
      if (err.error.error == 'permission denied') {
        errMsg = 'you do not have permission to access this content ';
      }
    }
    return throwError(errMsg);
  }
}
