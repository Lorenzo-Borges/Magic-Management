import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckCadastro } from './deck-cadastro';

describe('DeckCadastro', () => {
  let component: DeckCadastro;
  let fixture: ComponentFixture<DeckCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
