import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaCadastro } from './carta-cadastro';

describe('CartaCadastro', () => {
  let component: CartaCadastro;
  let fixture: ComponentFixture<CartaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
