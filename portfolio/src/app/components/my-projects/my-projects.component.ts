import {
  Component, ElementRef, OnInit,
  Renderer2, ViewChild, ViewChildren,
  QueryList

} from '@angular/core';
import { ResponsiveObservableService } from '../../services/responsive-observable.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faEye

} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    FontAwesomeModule

  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})

export class MyProjectsComponent implements OnInit {
  @ViewChild("grid") grid!: ElementRef;
  @ViewChildren("projects") projects!: QueryList<ElementRef>;

  protected readonly path_projeto_vazio: string = "../../../assets/projeto-vazio.webp";
  protected readonly path_projeto_1:     string = "../../../assets/projeto-1.webp";

  protected readonly faCircleArrowLeft  = faCircleArrowLeft;
  protected readonly faCircleArrowRight = faCircleArrowRight;
  protected readonly faEye              = faEye;
  protected readonly faGithub           = faGithub;

  private direction: number = 0;
  private data_id: number = 2;

  constructor(
    private renderer: Renderer2,
    private responsiveObservableService: ResponsiveObservableService

  ) {}

  ngOnInit(): void {
    this.responsiveObservableService.observe("my-projects");

  }

  carousel(direction: string): void {
    let data_id_aux = this.data_id;

    if (direction === "left" && this.direction !== 25) {
      this.data_id--;
      this.direction += 25;

    }
    else if (direction === "right" && this.direction !== -25) {
      this.data_id++;
      this.direction -= 25;

    }

    else return;

    let aux_element = document.querySelector(`[data-project='${data_id_aux}']`) as HTMLElement;
    let child = aux_element.children[0];
    this.renderer.removeClass(aux_element, "projeto-principal");
    this.renderer.removeClass(child, "hidden");

    let cur_element = document.querySelector(`[data-project='${this.data_id}']`) as HTMLElement;

    this.renderer.addClass(cur_element, "projeto-principal");

    this.renderer.setStyle(this.grid.nativeElement, "transform", `translateX(${this.direction}vw)`);

  }

  onClick(): void {
    this.projects.forEach((element: ElementRef) => {
      let child = element.nativeElement.children[0];

      if (element.nativeElement.classList.contains("projeto-principal")) {
        if (!child.classList.contains("hidden"))
          this.renderer.addClass(child, "hidden");

        else
          this.renderer.removeClass(child, "hidden");

      }

      else {
        this.renderer.removeClass(child, "hidden");

      }

    });

  }

}

