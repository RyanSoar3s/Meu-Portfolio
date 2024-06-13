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

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    FontAwesomeModule

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEmail = faEnvelope;
  faWhatsapp = faWhatsapp;
  faHouse = faHouse;
  faUSer = faUser;
  faSitemap = faSitemap;
  faSquarePhone = faSquarePhone;
}
