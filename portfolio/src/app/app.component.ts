import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { MeusProjetosComponent } from './components/meus-projetos/meus-projetos.component';
import { SobreEsteProjetoComponent } from './components/sobre-este-projeto/sobre-este-projeto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    InicioComponent,
    SobreMimComponent,
    MeusProjetosComponent,
    SobreEsteProjetoComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
