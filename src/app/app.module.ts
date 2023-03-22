import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { MapComponent } from './observable/map/map.component';
import { PluckOpComponent } from './observable/pluck-op/pluck-op.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { ConcatmergeComponent } from './observable/concatmerge/concatmerge.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MeargemapComponent } from './observable/meargemap/meargemap.component';
import { ConcatmapnotificationComponent } from './observable/concatmapnotification/concatmapnotification.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { SwitchmapSearchComponent } from './observable/switchmap-search/switchmap-search.component';
import { ExhaustmapComponent } from './observable/exhaustmap/exhaustmap.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { Comp1Component } from './observable/comps/comp1/comp1.component';
import { Comp2Component } from './observable/comps/comp2/comp2.component';
import { Comp3Component } from './observable/comps/comp3/comp3.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { FormsModule } from '@angular/forms';
import { SharereplayComponent } from './observable/sharereplay/sharereplay.component';
import { CatchthrowComponent } from './observable/catchthrow/catchthrow.component';
import { CombineletestComponent } from './observable/combineletest/combineletest.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckOpComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    ConcatmapComponent,
    ConcatmergeComponent,
    ConcatComponent,
    MeargemapComponent,
    ConcatmapnotificationComponent,
    SwitchmapComponent,
    SwitchmapSearchComponent,
    ExhaustmapComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    AsyncsubjectComponent,
    SharereplayComponent,
    CatchthrowComponent,
    CombineletestComponent


 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    LoadingBarModule,
    FormsModule

    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
