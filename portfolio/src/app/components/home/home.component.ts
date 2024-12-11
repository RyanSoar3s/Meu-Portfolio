import {
  Component, ElementRef,
  Renderer2, ViewChild,
  AfterViewInit, OnDestroy

} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { WindowService } from '../../services/window.service';
import { ScrollService } from '../../services/scroll.service';
import { AnimateScrollY } from '../../interfaces/animate-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger("textMoveAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          right: "150px"

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
            left: "150px"


          }),
          animate("2s ease-in-out", style({
            opacity: 1,
            left: "0px"

          }))

        ])

    ])

  ]

})
export class HomeComponent implements AnimateScrollY, AfterViewInit, OnDestroy {
  @ViewChild("fixed") fixed!: ElementRef;
  @ViewChild("text")   text!: ElementRef;
  @ViewChild("img")     img!: ElementRef;

  protected path: string = "assets/foto-principal.png";

  private scrollSub!: Subscription;
  private lastScroll: number = 0;
  private scale:      number = 0;

  constructor(private renderer2: Renderer2, private windowService: WindowService, private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.scrollSub = this.scrollService.scrollPosition$.subscribe((scrollY) => {
    this.animateScrollY(scrollY);

    });

  }

  onAnimationStart(): void {
    this.renderer2.setStyle(this.fixed.nativeElement, "position", "fixed");
    this.blockScroll();

  }

  onAnimationDone(): void {
    this.unblockScroll();

  }

  private blockScroll(): void {
    if (this.windowService.nativeWindow) {
      this.renderer2.setStyle(this.windowService.nativeWindow?.document.body, "overflow", "hidden");

    }

  }

  private unblockScroll(): void {
    if (this.windowService.nativeWindow) {
      this.renderer2.removeStyle(this.windowService.nativeWindow?.document.body, "overflow");

    }

  }

  animateScrollY(scrollY: number) {
    if (scrollY > 1649) {
      this.renderer2.removeStyle(this.fixed.nativeElement, "position");
      return;

    }

    this.renderer2.setStyle(this.fixed.nativeElement, "position", "fixed");

    let distScroll: number = Math.abs(this.lastScroll - scrollY) * 0.25;

    this.scale = (this.lastScroll > scrollY) ? this.scale - distScroll :
                                                  this.scale + distScroll;

    this.renderer2.setStyle(this.text.nativeElement, "right", `${this.scale}px`);
    this.renderer2.setStyle(this.img.nativeElement, "left", `${this.scale}px`);

    this.lastScroll = scrollY;

  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
      
    }
  }

}

