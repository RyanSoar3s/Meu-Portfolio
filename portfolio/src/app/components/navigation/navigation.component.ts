import {
  Component, Output,
  EventEmitter, OnInit,
  ViewChild, ElementRef,
  ChangeDetectionStrategy

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

import { WindowService } from '../../services/window.service';
import { ResponsiveObservableService } from '../../services/responsive-observable.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class NavigationComponent implements OnInit {
  @ViewChild("overlay") overlay!: ElementRef;
  @ViewChild("nav") nav!: ElementRef;
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

  protected imgIsHidden: boolean = true;

  constructor(
              protected window: WindowService,
              private responsiveObservableService: ResponsiveObservableService

  ) {}

  ngOnInit(): void {
    this.responsiveObservableService.observe("navigation");

  }

  showMenu(): void {
    const display = this.window.nativeWindow?.document.body.style.getPropertyValue("--navigation-overlay-display");
    this.window.nativeWindow?.document.body.style.setProperty("--navigation-overlay-display", (display === "block") ? "none" : "block");

    if (this.window.nativeWindow?.document.body.style.getPropertyValue("--navigation-nav-transform") === "-600px") {
      this.window.nativeWindow?.document.body.style.setProperty("--navigation-nav-transform", "0px");
      return;

    }
    this.window.nativeWindow?.document.body.style.setProperty("--navigation-nav-transform", "-600px");

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
