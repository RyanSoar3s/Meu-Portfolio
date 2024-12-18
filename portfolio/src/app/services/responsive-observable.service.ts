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
  private readonly LARGE = "(min-width: 992px)";
  private readonly MEDIUM = "(min-width: 768px)";
  private readonly SMALL = "(min-width: 600px)";
  private readonly XSMALL = "(max-width: 600px)";


  constructor(
              private breakpointObserver$: BreakpointObserver,
              private setPropertiesService: SetPropertiesService,
              private destroyRef: DestroyRef

  ) {}

  public observe(componentName: string): void {
    this.breakpointObserver$.observe([
      this.LARGE,
      this.MEDIUM,
      this.SMALL,
      this.XSMALL

    ])
    .pipe(
      map((result: BreakpointState) => {
        if (result.matches) {
          if (result.breakpoints[this.LARGE]) {
            this.setPropertiesService.setValues(componentName, this.LARGE);

          }

          else if (result.breakpoints[this.MEDIUM]) {
            this.setPropertiesService.setValues(componentName, this.MEDIUM);

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
