import {
  Component, OnInit, HostListener

} from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsAboutMeComponent } from './components/skills-about-me/skills-about-me.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { AboutThisProjectComponent } from './components/about-this-project/about-this-project.component';

import { WindowService } from './services/window.service';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsAboutMeComponent,
    MyProjectsComponent,
    AboutThisProjectComponent

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
