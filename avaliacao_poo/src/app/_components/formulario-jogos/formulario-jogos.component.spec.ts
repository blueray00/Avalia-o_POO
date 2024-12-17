import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJogosComponent } from './formulario-jogos.component';

describe('FormularioJogosComponent', () => {
  let component: FormularioJogosComponent;
  let fixture: ComponentFixture<FormularioJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioJogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
