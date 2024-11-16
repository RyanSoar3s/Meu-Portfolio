import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoSobreMimComponent } from './conteudo-sobre-mim.component';

describe('ConteudoSobreMimComponent', () => {
  let component: ConteudoSobreMimComponent;
  let fixture: ComponentFixture<ConteudoSobreMimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoSobreMimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoSobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
