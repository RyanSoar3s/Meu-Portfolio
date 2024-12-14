import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { TypeClasses } from '../interfaces/type-classes';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveObservableService {
  private componentClasses: TypeClasses = { navigation: [true] };
  private sub!: Subscription;

  constructor(private breakpointObserver$: BreakpointObserver) {}

  public subscribe(callback: (v: any) => void): void {
    if (!this.sub || this.sub.closed) {
      this.sub = this.breakpointObserver$
      .observe([
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall,

      ])
      .subscribe({
        next: (result: BreakpointState) => callback([true])
        // next: (result: BreakpointState) => callback(result)
      });


    }

  }

  private setClasses(result: BreakpointState, callback: (v: any) => void): void {
    for (let v of Object.values(result)) {
      for (let breakpoint of Object.keys(v)){
        if (breakpoint === Breakpoints.XSmall && v[breakpoint]) {
          this.componentClasses.navigation = [!this.componentClasses.navigation[0]]
          //callback(this.componentClasses.navigation[0])

        }

      }

    }
    /////////////////////////////////////////////////////////////////////////
    ////console.log(result.breakpoints[Breakpoints.XSmall]) USAR ISSO!!!!////
    /////////////////////////////////////////////////////////////////////////
  }

}
