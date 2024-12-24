import { Component, OnInit } from '@angular/core';

import { ResponsiveObservableService } from '../../services/responsive-observable.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit {
  constructor(private responsiveObservableService: ResponsiveObservableService) {

  }

  ngOnInit(): void {
    this.responsiveObservableService.observe("my-skills");

  }

}
