import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPhotoComponent } from './zoom-photo.component';

describe('ZoomPhotoComponent', () => {
  let component: ZoomPhotoComponent;
  let fixture: ComponentFixture<ZoomPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoomPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
