import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  person: any;
  fetching: boolean = false;

  status:string='No Data'
  constructor(
    private http: HttpClient,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}
  fetchingData() {
    this.fetching = true;
    this.status = 'Fetching Data...';
    this.http
      .get('https://jsonplaceholder.typicode.com/users').pipe(
        // retry(5)
        retryWhen(err=>err.pipe(
          delay(3000),
          scan((retryCount)=>{
            if(retryCount>=4){
              throw err;
            }else{
              retryCount = retryCount+1
              this.status = 'Retrying Attempt #'+ retryCount
              return retryCount;
            }
          },0)
        ))
      )
      .subscribe((res) => {
        this.person = res;
        this.status='Data Fetched',
        this.fetching = false;
        console.log(res);
      },(err) => {
       this.fetching = false;
       this.status='Problem Fetching Data'
       }
      );
  }
}
