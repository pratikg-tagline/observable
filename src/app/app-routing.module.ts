import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { observable } from 'rxjs';
import { ContainerComponent } from './container/container.component';
import { AllComponent } from './observable/all/all.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { CatchthrowComponent } from './observable/catchthrow/catchthrow.component';
import { CombineletestComponent } from './observable/combineletest/combineletest.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { ConcatmapComponent } from './observable/concatmap/concatmap.component';
import { ConcatmapnotificationComponent } from './observable/concatmapnotification/concatmapnotification.component';
import { ConcatmergeComponent } from './observable/concatmerge/concatmerge.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { ExhaustmapComponent } from './observable/exhaustmap/exhaustmap.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { MeargemapComponent } from './observable/meargemap/meargemap.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckOpComponent } from './observable/pluck-op/pluck-op.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SharereplayComponent } from './observable/sharereplay/sharereplay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchmapSearchComponent } from './observable/switchmap-search/switchmap-search.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';

const routes: Routes = [
  {
    path:'',
    component:ObservableComponent,
    children:[
    {
      path:'fromEvent',
      component:FromEventComponent
    },
    {
      path:'interval',
      component:IntervalComponent
    },
    {
      path:'offrom',
      component:OfFromComponent
    },
    {
      path:'toArray',
      component:ToArrayComponent
    },
    {
      path:'custom',
      component:CustomObservableComponent
    },
    {
      path:'map',
      component:MapComponent
    },
    {
      path:'pluck',
      component:PluckOpComponent
    },
    {
      path:'filter',
      component:FilterComponent
    },
    {
      path:'tap',
      component:TapComponent
    },
    {
      path:'take',
      component:TakeComponent
    },
    {
      path:'retry',
      component:RetryComponent
    },
    {
      path:'debounce',
      component:DebounceComponent
    },
    {
      path:'concatmap',
      component:ConcatmapComponent
    },
    {
      path:'concat',
      component:ConcatComponent
    },
    {
      path:'concatmearge',
      component:ConcatmergeComponent
    },
    {
      path:'concatmapnotification',
      component:ConcatmapnotificationComponent
    },
    {
      path:'meargemap',
      component:MeargemapComponent
    },
    {
      path:'switchmap',
      component:SwitchmapComponent
    },
    {
      path:'switchmapsearch',
      component:SwitchmapSearchComponent
    },
    {
      path:'exhaustmap',
      component:ExhaustmapComponent
    },
    {
      path:'subject',
      component:SubjectComponent
    },
    {
      path:'asyncsubject',
      component:AsyncsubjectComponent
    },
    {
      path:'sharereplay',
      component:SharereplayComponent
    },
    {
      path:'catchthrow',
      component:CatchthrowComponent
    },
    {
      path:'combinelatest',
      component:CombineletestComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
