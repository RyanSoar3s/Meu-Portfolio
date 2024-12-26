import {
  Component, ElementRef,
  OnInit,
  Renderer2, ViewChild

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

export class MyProjectsComponent implements OnInit{
  @ViewChild("grid") grid!: ElementRef;

  protected readonly path_projeto_vazio: string = "../../../assets/projeto-vazio.png";
  protected readonly path_projeto_1: string = "../../../assets/projeto-1.png";

  protected readonly faCircleArrowLeft  = faCircleArrowLeft;
  protected readonly faCircleArrowRight = faCircleArrowRight;
  protected readonly faEye              = faEye;
  protected readonly faGithub           = faGithub;

  private direction: number = 0;
  private data_id: number = 2;

  constructor(private renderer: Renderer2, private responsiveObservableService: ResponsiveObservableService) {}

  ngOnInit(): void {
    this.responsiveObservableService.observe("my-projects");

  }

  carousel(direction: string): void {
    let element = document.querySelector(`[data-project-id='${this.data_id}']`) as HTMLElement;

    if (direction === "left" && this.direction !== 25) {
      element.classList.remove("projeto-principal");
      this.data_id--;
      this.direction += 25;

    }
    else if (direction === "right" && this.direction !== -25) {
      element.classList.remove("projeto-principal");
      this.data_id++;
      this.direction -= 25;

    }

    else return;

    element = document.querySelector(`[data-project-id='${this.data_id}']`) as HTMLElement;
    element.classList.add("projeto-principal");

    this.renderer.setStyle(this.grid.nativeElement, "transform", `translateX(${this.direction}vw)`)

  }

}

