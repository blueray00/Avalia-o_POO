import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesJogosComponent } from './detalhes-jogos.component';

describe('DetalhesJogosComponent', () => {
  let component: DetalhesJogosComponent;
  let fixture: ComponentFixture<DetalhesJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesJogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
