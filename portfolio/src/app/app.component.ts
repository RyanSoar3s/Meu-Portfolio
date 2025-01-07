import {
  Component, OnInit, OnDestroy

} from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { AboutThisProjectComponent } from './components/about-this-project/about-this-project.component';

import { WindowService } from './services/window.service';
import { ScrollService } from './services/scroll.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    AboutThisProjectComponent,
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';

  private scrollPositions = [
    { posY: 0     },
    { posY: 2398  },
    { posY: 12470 },
    { posY: 13352 },
    { posY: 14006 }

  ];

  private scrollSub!: Subscription;

  constructor(
    private windowService: WindowService,
    private scrollService: ScrollService

  ) {}

  ngOnInit(): void {
    if (this.windowService.nativeWindow) {
      history.scrollRestoration = 'manual';
      this.windowService.nativeWindow.scrollTo(0, 0);

    }

    this.scrollSub = this.scrollService.onScroll().subscribe();

  }

  enableNavigationScrolling(key: number): void {
    const posY = Number(this.scrollPositions[key].posY);
    this.windowService.nativeWindow?.scrollTo({ top: posY, behavior: "smooth" });

  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();

    }

  }

}
