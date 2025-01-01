import {
  Component, ElementRef, OnInit,
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
  protected readonly path_projeto_1:     string = "../../../assets/projeto-1.png";

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
    aux_element.classList.remove("projeto-principal");

    let cur_element = document.querySelector(`[data-project='${this.data_id}']`) as HTMLElement;
    cur_element.classList.add("projeto-principal");

    this.renderer.setStyle(this.grid.nativeElement, "left", `${this.direction}vw`)

  }

}

