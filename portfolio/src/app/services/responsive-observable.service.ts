import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { MapComponentValues } from '../interfaces/component-values';

import { ResponsiveComponentValuesService } from './responsive-component-values.service';
import { BehaviorSubject } from 'rxjs';

import { map } from 'rxjs/operators'

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { DestroyRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveObservableService {
  private behaviorSuject = new BehaviorSubject<MapComponentValues<string, object>>({
    components: {}

  });
  public componentValuesObserver$ = this.behaviorSuject.asObservable();
  private mapComponentValues!: MapComponentValues<string, object>;

  //private XLARGE = "(min-width: 1200px)";
  private LARGE = "(min-width: 992px)"
  private MEDIUM = "(min-width: 768px)";
  private SMALL = "(min-width: 600px)";
  private XSMALL = "(max-width: 600px)";


  constructor(
              private breakpointObserver$: BreakpointObserver,
              private responsiveComponentValuesService: ResponsiveComponentValuesService,
              private destroyRef: DestroyRef

  ) {
    this.breakpointObserver$.observe([
      //this.XLARGE,
      this.LARGE,
      this.MEDIUM,
      this.SMALL,
      this.XSMALL

    ])
    .pipe(
      map((result: BreakpointState) => {
        if (result.matches) {
          /*if (result.breakpoints[this.XLARGE]) {
            this.mapComponentValues = this.responsiveComponentValuesService.defineComponentValues(this.XLARGE);


          }*/

          if (result.breakpoints[this.LARGE]) {
            this.mapComponentValues = this.responsiveComponentValuesService.defineComponentValues(this.LARGE);

          }

          else if (result.breakpoints[this.MEDIUM]) {
            this.mapComponentValues = this.responsiveComponentValuesService.defineComponentValues(this.MEDIUM);

          }

          else if (result.breakpoints[this.SMALL]) {
            this.mapComponentValues = this.responsiveComponentValuesService.defineComponentValues(this.SMALL);

          }

          else {
            this.mapComponentValues = this.responsiveComponentValuesService.defineComponentValues(this.XSMALL);

          }

        }

      }),
      takeUntilDestroyed(this.destroyRef)

    )
    .subscribe(() => {
      this.behaviorSuject.next(this.mapComponentValues)

    });

  }

}
