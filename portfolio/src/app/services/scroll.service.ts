import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPosition: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public scrollPosition$: Observable<number>      = this.scrollPosition.asObservable();

  updateScrollPosition(scrollY: number): void {
    this.scrollPosition.next(scrollY);
  }
}
