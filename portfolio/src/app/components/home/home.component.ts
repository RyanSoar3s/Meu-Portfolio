import {
  Component, ElementRef,
  Renderer2, ViewChild,
  OnInit, AfterViewInit,
  OnDestroy, ChangeDetectionStrategy

} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { WindowService } from '../../services/window.service';
import { ScrollService } from '../../services/scroll.service';
import { ResponsiveObservableService } from '../../services/responsive-observable.service';

import { AnimateScrollY } from '../../interfaces/animate-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("textMoveAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          right: "500px"

        }),
        animate("2s ease-in-out", style({
          opacity: 1,
          right: "0px"

        }))

      ])

    ]),
    trigger("imgMoveAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            left: "500px"


          }),
          animate("2s ease-in-out", style({
            opacity: 1,
            left: "0px"

          }))

        ])

    ])

  ]

})
export class HomeComponent implements AnimateScrollY, OnInit, AfterViewInit, OnDestroy {
  @ViewChild("fixed") fixed!: ElementRef;
  @ViewChild("text")   text!: ElementRef;
  @ViewChild("img")     img!: ElementRef;

  @ViewChild("barrier") barrier! : ElementRef;

  protected readonly path: string = "assets/foto-principal.webp";

  private scrollSub!: Subscription;
  private lastScroll: number = 0;
  private direction:  number = 0;

  constructor(
              private renderer: Renderer2,
              private windowService: WindowService,
              private scrollService: ScrollService,
              private responsiveObservableService: ResponsiveObservableService

  ) {}

  ngOnInit(): void {
    if (this.windowService.nativeWindow) {
      history.scrollRestoration = 'manual';
      this.windowService.nativeWindow.scrollTo(0, 0);

    }
    this.responsiveObservableService.observe("home");

  }

  ngAfterViewInit(): void {
    this.scrollSub = this.scrollService.scrollPosition$.subscribe((scrollY) => {
    this.animateScrollY(scrollY);

    });

  }

  onAnimationStart(): void {
    this.renderer.addClass(this.windowService.nativeWindow?.document.body, "ready");
    this.renderer.setStyle(this.fixed.nativeElement, "position", "fixed");
    this.renderer.setStyle(this.barrier.nativeElement, "display", "block");
    this.blockScroll();

  }

  onAnimationDone(): void {
    this.renderer.setStyle(this.barrier.nativeElement, "display", "none");
    this.unblockScroll();

  }

  private blockScroll(): void {
    if (this.windowService.nativeWindow) {
      this.renderer.setStyle(this.windowService.nativeWindow?.document.body, "overflow", "hidden");

    }

  }

  private unblockScroll(): void {
    if (this.windowService.nativeWindow) {
      this.renderer.removeStyle(this.windowService.nativeWindow?.document.body, "overflow");

    }

  }

  animateScrollY(scrollY: number) {
    if (scrollY > 1649) {
      this.renderer.removeStyle(this.fixed.nativeElement, "position");
      return;

    }

    this.renderer.setStyle(this.fixed.nativeElement, "position", "fixed");

    let distScroll: number = Math.abs(this.lastScroll - scrollY) * 0.33;

    this.direction = (this.lastScroll > scrollY) ? this.direction - distScroll :
                                                   this.direction + distScroll;
    this.direction = (this.direction < 0.1) ? 0 : this.direction;

    this.renderer.setStyle(this.text.nativeElement, "right", `${this.direction}px`);
    this.renderer.setStyle(this.img.nativeElement, "left", `${this.direction}px`);

    this.lastScroll = scrollY;

  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();

    }
  }

}

