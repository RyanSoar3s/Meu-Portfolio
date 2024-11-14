import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreEsteProjetoComponent } from './sobre-este-projeto.component';

describe('SobreEsteProjetoComponent', () => {
  let component: SobreEsteProjetoComponent;
  let fixture: ComponentFixture<SobreEsteProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreEsteProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreEsteProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
