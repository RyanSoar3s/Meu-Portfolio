import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

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
}
