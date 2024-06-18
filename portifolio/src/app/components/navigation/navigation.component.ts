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
import { ZoomPhotoComponent } from '../zoom-photo/zoom-photo.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ZoomPhotoComponent

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
  // Path
  path: string = "assets/user.png";

  // Ícones
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEmail = faEnvelope;
  faWhatsapp = faWhatsapp;
  faHouse = faHouse;
  faUSer = faUser;
  faSitemap = faSitemap;
  faSquarePhone = faSquarePhone;

  // Mostrar/Ocultar foto com zoom
  hidden: boolean = true;

  zoomPhoto() {
    this.hidden = !this.hidden;

  }
}
