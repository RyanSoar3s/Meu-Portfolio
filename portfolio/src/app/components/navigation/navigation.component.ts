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

import { MapComponentValues } from '../../interfaces/component-values';
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

  mapNavigationValues!: MapComponentValues<string, object>;

  // Path
  path: string = "assets/foto-navegacao.jpg";

  // Ícones
  protected faGithub     = faGithub;
  protected faLinkedin   = faLinkedin;
  protected faEmail      = faEnvelope;
  protected faWhatsapp   = faWhatsapp;
  protected faHouse      = faHouse;
  protected faUser       = faUser;
  protected faAtom       = faAtom;
  protected faSitemap    = faSitemap;
  protected faCircleInfo = faCircleInfo;

  // Mostrar/Ocultar foto com zoom
  protected imgIsHidden: boolean = true;
  protected menuBarIsHidden!: boolean;

  constructor(private responsiveObservableService: ResponsiveObservableService) {}

  ngOnInit(): void {
    this.responsiveObservableService.componentValuesObserver$.subscribe((mapValues: MapComponentValues<string, object>) => {
      this.mapNavigationValues = mapValues;
      this.menuBarIsHidden = !this.mapNavigationValues.components.navigation?.isHidden;

    })

  }

  showMenu(): void {
    this.mapNavigationValues.components.navigation!.isHidden = !this.mapNavigationValues.components.navigation?.isHidden;


  }

  changeImageScale() {
    const body: HTMLElement = document.body;
    body.style.overflowY = (this.imgIsHidden) ? "hidden" : "auto";

    this.imgIsHidden = !this.imgIsHidden;

  }

  emit(event: Event, show_menu: boolean): void {
    if (show_menu)
      this.showMenu();
  
    const a = event.target as HTMLElement;
    const data_id = Number(a.getAttribute("data-id"));

    this.enable_navigation_scrolling.emit(data_id);

  }

}
