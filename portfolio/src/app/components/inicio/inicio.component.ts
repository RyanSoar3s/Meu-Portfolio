import {
  Component, ElementRef, HostListener,
  Renderer2, ViewChild

} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

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
  @ViewChild("text") text!: ElementRef;
  @ViewChild("img") img!: ElementRef;

  path: string = "assets/foto-principal.png";
  lastScroll:     number = 0;
  lastScrollText: number = 0;
  lastScrollImg:  number = 0;

  constructor(private renderer2: Renderer2) {}

  onAnimationStart(): void {
    this.blockScroll();

  }

  onAnimationDone(): void {
    this.unblockScroll();

  }

  private blockScroll(): void {
    this.renderer2.setStyle(document.body, "overflow", "hidden");

  }

  private unblockScroll(): void {
    this.renderer2.removeStyle(document.body, "overflow")

  }

  @HostListener("window:scroll", ["$event"])

  onScroll() {
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
      this.renderer2.setStyle(this.img.nativeElement, "left", `${this.lastScrollImg}px`)

      this.lastScroll = windowScroll

  }

}

