import { Component, OnInit } from '@angular/core';

import { ResponsiveObservableService } from '../../services/responsive-observable.service';

@Component({
  selector: 'app-about-this-project',
  standalone: true,
  imports: [],
  templateUrl: './about-this-project.component.html',
  styleUrl: './about-this-project.component.scss'
})
export class AboutThisProjectComponent implements OnInit {
  constructor(private responsiveObservableService: ResponsiveObservableService) {}

  ngOnInit(): void {
    this.responsiveObservableService.observe("about-this-project");

  }

}
