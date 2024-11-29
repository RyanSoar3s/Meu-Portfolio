import { Component } from '@angular/core';

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
  protected hidden: boolean = true;

  changeImageScale() {
    const body: HTMLElement = document.body;
    body.style.overflow = (this.hidden) ? "hidden" : "auto";

    this.hidden = !this.hidden;

  }
}
