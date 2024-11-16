import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { SkillsSobreMimComponent } from './components/skills-sobre-mim/skills-sobre-mim.component';
import { MeusProjetosComponent } from './components/meus-projetos/meus-projetos.component';
import { SobreEsteProjetoComponent } from './components/sobre-este-projeto/sobre-este-projeto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    InicioComponent,
    SobreMimComponent,
    SkillsSobreMimComponent,
    MeusProjetosComponent,
    SobreEsteProjetoComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
