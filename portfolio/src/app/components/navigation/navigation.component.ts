import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHouse,
  faUser,
  faSitemap,
  faSquarePhone

} from "@fortawesome/free-solid-svg-icons"
import { ScaleImageComponent } from '../scale-image/scale-image.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ScaleImageComponent

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
  // Path
  path: string = "assets/foto-navegacao.jpg";

  // Ícones
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEmail = faEnvelope;
  faWhatsapp = faWhatsapp;
  faHouse = faHouse;
  faUser = faUser;
  faSitemap = faSitemap;
  faSquarePhone = faSquarePhone;

  // Mostrar/Ocultar foto com zoom
  hidden: boolean = true;

  changeImageScale() {
    const body: HTMLElement = document.body;
    body.style.overflow = (this.hidden) ? "hidden" : "auto";

    this.hidden = !this.hidden;

  }
}
