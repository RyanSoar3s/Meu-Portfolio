import {
  Component, Output,
  EventEmitter, OnInit

} from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHouse,
  faUser,
  faAtom,
  faSitemap,
  faCircleInfo

} from "@fortawesome/free-solid-svg-icons"
import { ScaleImageComponent } from '../scale-image/scale-image.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

//import { MapComponentValues } from '../../interfaces/component-values';
//import { NavigationPropertyValues } from '../../interfaces/navigation-property-values';
import { ComponentPropertyValues } from '../../interfaces/components-property-values';
import { ResponsiveObservableService } from '../../services/responsive-observable.service';

import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ScaleImageComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [
    trigger("navAnimation", [
      state("hidden", style({
        left: "-355px"

      })),

      state("show", style({
        left: "0px"

      })),

      transition("hidden <=> show", [ animate("0.5s ease") ])

    ])

  ]

})

export class NavigationComponent implements OnInit {
  @Output() enable_navigation_scrolling = new EventEmitter<number>();



  // Path
  protected readonly path: string = "assets/foto-navegacao.jpg";

  // Ícones
  protected readonly faGithub     = faGithub;
  protected readonly faLinkedin   = faLinkedin;
  protected readonly faEmail      = faEnvelope;
  protected readonly faWhatsapp   = faWhatsapp;
  protected readonly faHouse      = faHouse;
  protected readonly faUser       = faUser;
  protected readonly faAtom       = faAtom;
  protected readonly faSitemap    = faSitemap;
  protected readonly faCircleInfo = faCircleInfo;

  // Mostrar/Ocultar foto com zoom
  protected imgIsHidden: boolean = true;
  protected menuBarIsHidden!: boolean;

  constructor(private responsiveObservableService: ResponsiveObservableService) {}

  ngOnInit(): void {
    this.responsiveObservableService.observe("navigation");

  }

  showMenu(): void {
    //this.mapNavigationValues.components.navigation!.isHidden = !this.mapNavigationValues.components.navigation?.isHidden;


  }

  changeImageScale() {
    const body: HTMLElement = document.body;
    body.style.overflowY = (this.imgIsHidden) ? "hidden" : "auto";

    this.imgIsHidden = !this.imgIsHidden;

  }

  emit(event: Event): void {
    const a = event.target as HTMLElement;
    const data_id = Number(a.getAttribute("data-id"));

    this.enable_navigation_scrolling.emit(data_id);

  }

}
