import {
  Component, ElementRef, HostListener,
  Renderer2, ViewChild

} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { WindowService } from '../../window.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
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
export class InicioComponent {
  @ViewChild("fixed") fixed!: ElementRef;
  @ViewChild("text")   text!: ElementRef;
  @ViewChild("img")     img!: ElementRef;

  path: string = "assets/foto-principal.png";
  lastScroll:     number = 0;
  lastScrollText: number = 0;
  lastScrollImg:  number = 0;

  constructor(private renderer2: Renderer2, private windowService: WindowService) {}

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

  @HostListener("window:scroll")

  onScroll() {
    const scrollY: number = Number(this.windowService.nativeWindow?.scrollY);

    if (scrollY > 1649) {
      this.renderer2.removeStyle(this.fixed.nativeElement, "position");
      return;

    }

    if (this.fixed.nativeElement.style.position === "")
      this.renderer2.setStyle(this.fixed.nativeElement, "position", "fixed");


    let windowScroll: number = window.scrollY;
    let distScroll:   number = Math.abs(this.lastScroll - windowScroll) * 0.25;

    if (this.lastScroll > windowScroll) {
      this.lastScrollText -= distScroll;
      this.lastScrollImg  -= distScroll;

    }

    else {
      this.lastScrollText += distScroll;
      this.lastScrollImg  += distScroll;

    }

    this.renderer2.setStyle(this.text.nativeElement, "right", `${this.lastScrollText}px`);
    this.renderer2.setStyle(this.img.nativeElement, "left", `${this.lastScrollImg}px`);

    this.lastScroll = windowScroll;

  }

}

