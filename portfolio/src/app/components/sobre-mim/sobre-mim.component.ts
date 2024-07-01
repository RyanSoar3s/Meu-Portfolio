import { Component } from '@angular/core';
import { ConteudoSobreMimComponent } from '../conteudo-sobre-mim/conteudo-sobre-mim.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBuildingColumns, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';
import { SkillsSobreMimComponent } from '../skills-sobre-mim/skills-sobre-mim.component';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ConteudoSobreMimComponent,
    SkillsSobreMimComponent

   ],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.scss'
})
export class SobreMimComponent {
  // Icons
  
  faRobot = faRobot;
  faLaptopCode = faLaptopCode;
  faBuildingColumns = faBuildingColumns;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;

}
