import {
  Component, Renderer2, ViewChildren, ElementRef,
  QueryList, AfterViewInit, OnDestroy,

} from '@angular/core';
import { ConteudoSobreMimComponent } from '../conteudo-sobre-mim/conteudo-sobre-mim.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuildingColumns, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

import { Subscription } from 'rxjs';

import { AnimateScrollY } from '../../interfaces/animate-scroll';

import { WindowService } from '../../services/window.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ConteudoSobreMimComponent

   ],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.scss'
})
export class SobreMimComponent implements AnimateScrollY, AfterViewInit, OnDestroy {
  protected faRobot           = faRobot;
  protected faLaptopCode      = faLaptopCode;
  protected faBuildingColumns = faBuildingColumns;
  protected faHtml5           = faHtml5;
  protected faCss3            = faCss3;
  protected faJs              = faJs;

  @ViewChildren("content", { read: ElementRef }) contentAboutMe!: QueryList<ElementRef>;

  private scrollSub!: Subscription;

  private animationScaleConfig!: { start: number, middle: number, end: number, scale: number, opacity: number }[];

  constructor(private renderer2: Renderer2, private windowService: WindowService, private scrollService: ScrollService) {
    this.animationScaleConfig = [
      { start: 500,  middle: 2400, end: 3000, scale: 0.0, opacity: 0.0 },
      { start: 3050, middle: 3400, end: 4000, scale: 0.0, opacity: 0.0 },
      { start: 4050, middle: 4400, end: 5000, scale: 0.0, opacity: 0.0 },
      { start: 5050, middle: 5400, end: 6000, scale: 0.0, opacity: 0.0 }

    ];

  }

  ngAfterViewInit(): void {
    this.scrollSub = this.scrollService.scrollPosition$.subscribe(scrollY => {
    this.animateScrollY(scrollY);

    });

  }

  private calculateScale(scrollY: number, index: number): void {
    const config = this.animationScaleConfig[index];

    const { start, middle, end } = config;

    if (scrollY >= start && scrollY < end) {
      if (scrollY >= middle && scrollY < middle + 200) return;

      let minValueScale;
      let maxValueScale;

      let minValueOpacity;
      let maxValueOpacity;

      let distScroll;
      let progress;

      if (scrollY < middle) {
        minValueScale = 0.0;
        maxValueScale = 1.0;

        minValueOpacity = 0.0;
        maxValueOpacity = 1.0;

        distScroll = middle - start;
        progress = (scrollY - start) / distScroll;

      }

      else {
        minValueScale = 1.0;
        maxValueScale = 1.15;

        minValueOpacity = 1.0;
        maxValueOpacity = 0.0;

        distScroll = end - middle;
        progress = (scrollY - middle) / distScroll;

      }

      const valueScale: number = parseFloat((minValueScale + progress * (maxValueScale - minValueScale)).toFixed(4));
      const valueOpacity: number = parseFloat((minValueOpacity + progress * (maxValueOpacity - minValueOpacity)).toFixed(4));

      config.scale = valueScale;
      config.opacity = valueOpacity;

      return;

    }

    config.scale = 0.0;
    config.opacity = 0.0;

  }



  animateScrollY(scrollY: number): void {
    this.contentAboutMe.forEach((content, index) => {

      this.calculateScale(scrollY, index);

      const scaleValue: number = this.animationScaleConfig[index].scale;
      const opacityValue: number = this.animationScaleConfig[index].opacity;

      this.renderer2.setStyle(content.nativeElement, "transform", `scale(${scaleValue})`);
      this.renderer2.setStyle(content.nativeElement, "opacity", `${opacityValue}`);

    });

  }

  ngOnDestroy(): void {
    this.scrollSub.unsubscribe();

  }

}
