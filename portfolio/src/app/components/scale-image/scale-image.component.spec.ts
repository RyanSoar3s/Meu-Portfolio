import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleImageComponent } from './scale-image.component';

describe('ZoomPhotoComponent', () => {
  let component: ScaleImageComponent;
  let fixture: ComponentFixture<ScaleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScaleImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
