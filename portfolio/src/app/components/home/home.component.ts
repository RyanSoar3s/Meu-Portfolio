import {
   Component, ElementRef, Renderer2,
   ViewChild, OnInit, AfterViewInit,
   OnDestroy, ChangeDetectionStrategy

} from '@angular/core';
import { Subscription } from 'rxjs';

import { ScrollService } from '../../services/scroll.service';
import { ResponsiveObservableService } from '../../services/responsive-observable.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('text') text!: ElementRef;
  @ViewChild('img') img!: ElementRef;

  protected readonly path: string = 'assets/foto-principal.webp';

  private scrollSub!: Subscription;
  private lastScroll: number = 0;
  private direction: number = 0;

  constructor(
    private renderer: Renderer2,
    private scrollService: ScrollService,
    private responsiveObservableService: ResponsiveObservableService

  ) {}

  ngOnInit(): void {
    this.responsiveObservableService.observe("home");

  }

  ngAfterViewInit(): void {
    this.scrollSub = this.scrollService.scrollPosition$.subscribe((scrollY) => {
      this.animateScrollY(scrollY);

    });

  }
  animateScrollY(scrollY: number): void {
    let distScroll: number = Math.abs(this.lastScroll - scrollY) * 0.33;

    this.direction =
      this.lastScroll > scrollY
        ? this.direction - distScroll
        : this.direction + distScroll;

    this.direction = this.direction < 0.1 ? 0 : this.direction;

    this.renderer.setStyle(this.text.nativeElement, 'transform', `translateX(${-this.direction}px)`);
    this.renderer.setStyle(this.img.nativeElement, 'transform', `translateX(${this.direction}px)`);

    this.lastScroll = scrollY;

  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();

    }
  }

}
