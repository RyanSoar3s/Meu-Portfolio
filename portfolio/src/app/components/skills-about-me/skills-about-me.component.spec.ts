import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAboutMeComponent } from './skills-about-me.component';

describe('SkillsAboutMeComponent', () => {
  let component: SkillsAboutMeComponent;
  let fixture: ComponentFixture<SkillsAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
