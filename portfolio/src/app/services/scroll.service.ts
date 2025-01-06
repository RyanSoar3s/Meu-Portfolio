import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, map, Observable } from 'rxjs';
import { WindowService } from './window.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPosition: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public scrollPosition$: Observable<number>      = this.scrollPosition.asObservable();

  constructor(private windowService: WindowService, private ngZone: NgZone) {}

  public onScroll(): Observable<void> {
    return fromEvent(window, 'scroll').pipe(
      this.ngZone.runOutsideAngular(() => {
        return map(() => {
          if (this.windowService.nativeWindow) {
            this.updateScrollPosition(this.windowService.nativeWindow.scrollY);

          }

        });

      })

    )

  }

  private updateScrollPosition(scrollY: number): void {
    this.scrollPosition.next(scrollY);

  }

}
