import {
  Component, Renderer2, ViewChildren, ElementRef,
  QueryList, AfterViewInit, OnInit, OnDestroy,

} from '@angular/core';
import { ContentAboutMeComponent } from '../content-about-me/content-about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuildingColumns, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

import { Subscription } from 'rxjs';

import { AnimateScrollY } from '../../interfaces/animate-scroll';
import { AnimationConfig } from '../../interfaces/animation-config';

import { ScrollService } from '../../services/scroll.service';
import { ResponsiveObservableService } from '../../services/responsive-observable.service';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ContentAboutMeComponent

   ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AnimateScrollY, OnInit, AfterViewInit, OnDestroy {
  protected readonly faRobot           = faRobot;
  protected readonly faLaptopCode      = faLaptopCode;
  protected readonly faBuildingColumns = faBuildingColumns;
  protected readonly faHtml5           = faHtml5;
  protected readonly faCss3            = faCss3;
  protected readonly faJs              = faJs;

  @ViewChildren("content", { read: ElementRef }) contentAboutMe!: QueryList<ElementRef>;

  private scrollSub!: Subscription;

  private animationConfigs: AnimationConfig[] = [
    { start: 500, middle: 2200, stoppingPoint: 2500, end: 3100, scale: 0, opacity: 0 },
    { start: 3500, middle: 5200, stoppingPoint: 5500, end: 6100, scale: 0, opacity: 0 },
    { start: 6500, middle: 8200, stoppingPoint: 8500, end: 9100, scale: 0, opacity: 0 },
    { start: 9500, middle: 11200, stoppingPoint: 11500, end: 12100, scale: 0, opacity: 0 }

  ];

  constructor(
              private renderer: Renderer2,
              private scrollService: ScrollService,
              private responsiveObservableService: ResponsiveObservableService

  ) {}

  ngOnInit(): void {
    this.responsiveObservableService.observe("about-me");

  }

  ngAfterViewInit(): void {
    this.scrollSub = this.scrollService.scrollPosition$.subscribe(scrollY => {
    this.animateScrollY(scrollY);

    });

  }

  public animateScrollY(scrollY: number): void {
    this.contentAboutMe.forEach((content, index) => {
      const { scale, opacity } = this.calculateAnimationValues(scrollY, index, this.animationConfigs[index]);
      this.renderer.setStyle(content.nativeElement, 'transform', `scale(${scale})`);
      this.renderer.setStyle(content.nativeElement, 'opacity', `${opacity}`);

    });

  }

  private calculateAnimationValues(scrollY: number, index: number, config: AnimationConfig): { scale: number; opacity: number } {
    const { start, middle, stoppingPoint, end } = config;

    if (index === 3 && scrollY > middle) {
      return { scale: 1.0, opacity: 1.0 };

    }

    if (scrollY >= start && scrollY < end) {
      if (scrollY >= middle && scrollY < stoppingPoint) {
        return { scale: 1.0, opacity: 1.0 };

      }

      const isBeforeMiddle: boolean = scrollY < middle;
      const rangeStart: number = (isBeforeMiddle) ? start : middle;
      const rangeEnd: number = (isBeforeMiddle) ? middle : end;

      const progress: number = (scrollY - rangeStart) / (rangeEnd - rangeStart);
      const scale: number = (isBeforeMiddle && index === 0)
        ? this.interpolate(0, 1, progress)
        : (isBeforeMiddle) ? this.interpolate(0.5, 1, progress)
        : this.interpolate(1, 1.15, progress);

      const opacity = (isBeforeMiddle)
        ? this.interpolate(0, 1, progress)
        : this.interpolate(1, 0, progress);

      return { scale: parseFloat(scale.toFixed(4)), opacity: parseFloat(opacity.toFixed(4)) };
    }

    return { scale: 0.0, opacity: 0.0 };
  }

  private interpolate(min: number, max: number, progress: number): number {
    return min + (max - min) * progress;

  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();

    }

  }

}
