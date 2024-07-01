import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSobreMimComponent } from './skills-sobre-mim.component';

describe('SkillsSobreMimComponent', () => {
  let component: SkillsSobreMimComponent;
  let fixture: ComponentFixture<SkillsSobreMimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSobreMimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
