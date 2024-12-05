import {
  Component, OnInit, HostListener

} from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';
import { SkillsSobreMimComponent } from './components/skills-sobre-mim/skills-sobre-mim.component';
import { MeusProjetosComponent } from './components/meus-projetos/meus-projetos.component';
import { SobreEsteProjetoComponent } from './components/sobre-este-projeto/sobre-este-projeto.component';

import { WindowService } from './services/window.service';
import { ScrollService } from './services/scroll.service';

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
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private windowService: WindowService, private scrollService: ScrollService) {}

  ngOnInit(): void {
    if (this.windowService.nativeWindow) {
      history.scrollRestoration = 'manual';
      this.windowService.nativeWindow.scrollTo(0, 0);

    }

  }

  @HostListener("window:scroll")

  onScroll(): void {
    const scrollY: number = Number(this.windowService.nativeWindow?.scrollY);
    this.scrollService.updateScrollPosition(scrollY);

  }

}
