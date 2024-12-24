import {
  Component, OnInit, HostListener

} from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { AboutThisProjectComponent } from './components/about-this-project/about-this-project.component';

import { WindowService } from './services/window.service';
import { ScrollService } from './services/scroll.service';
import { ResponsiveObservableService } from './services/responsive-observable.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    AboutThisProjectComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  private scrollPositions = [
    { posY: 0     },
    { posY: 2398  },
    { posY: 13025 },
    { posY: 14098 },
    { posY: 15235 }

  ]
  constructor(
    private windowService: WindowService,
    private scrollService: ScrollService,
    private responsiveObervableService: ResponsiveObservableService

  ) {}

  ngOnInit(): void {
    if (this.windowService.nativeWindow) {
      history.scrollRestoration = 'manual';
      this.windowService.nativeWindow.scrollTo(0, 0);

    }
    this.responsiveObervableService.observe("app");

  }

  @HostListener("window:scroll")

  onScroll(): void {
    const scrollY: number = Number(this.windowService.nativeWindow?.scrollY);
    this.scrollService.updateScrollPosition(scrollY);

  }

  enableNavigationScrolling(key: number): void {
    const posY = Number(this.scrollPositions[key].posY);
    this.windowService.nativeWindow?.scrollTo({ top: posY, behavior: "smooth" });

  }

}
