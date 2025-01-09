import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { map } from 'rxjs/operators'

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { DestroyRef } from '@angular/core';

import { SetPropertiesService } from './set-properties.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveObservableService {
  private readonly XLARGE = "(min-width: 1200px)";
  private readonly LARGE = "(min-width: 992px)";
  private readonly MEDIUM_PORT = "(min-width: 768px) and (min-height: 500px)";
  private readonly MEDIUM_LAND = "(min-width: 768px) and (max-height: 500px)";
  private readonly SMALL = "(min-width: 600px)";
  private readonly XSMALL = "(max-width: 600px)";


  constructor(
              private breakpointObserver$: BreakpointObserver,
              private setPropertiesService: SetPropertiesService,
              private destroyRef: DestroyRef

  ) {}

  public observe(componentName: string): void {
    this.breakpointObserver$.observe([
      this.XLARGE,
      this.LARGE,
      this.MEDIUM_PORT,
      this.MEDIUM_LAND,
      this.SMALL,
      this.XSMALL

    ])
    .pipe(
      map((result: BreakpointState) => {
        if (result.matches) {
          if (result.breakpoints[this.XLARGE]) {
            this.setPropertiesService.setValues(componentName, this.XLARGE);

          }

          else if (result.breakpoints[this.LARGE]) {
            this.setPropertiesService.setValues(componentName, this.LARGE);

          }

          else if (result.breakpoints[this.MEDIUM_PORT]) {
            this.setPropertiesService.setValues(componentName, this.MEDIUM_PORT);

          }
          else if (result.breakpoints[this.MEDIUM_LAND]) {
            this.setPropertiesService.setValues(componentName, this.MEDIUM_LAND);

          }

          else if (result.breakpoints[this.SMALL]) {
            this.setPropertiesService.setValues(componentName, this.SMALL);

          }

          else {
            this.setPropertiesService.setValues(componentName, this.XSMALL);

          }

        }

      }),
      takeUntilDestroyed(this.destroyRef)

    )
    .subscribe();

  }

}
