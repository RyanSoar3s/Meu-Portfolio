import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAboutMeComponent } from './content-about-me.component';

describe('ContentAboutMeComponent', () => {
  let component: ContentAboutMeComponent;
  let fixture: ComponentFixture<ContentAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAboutMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
