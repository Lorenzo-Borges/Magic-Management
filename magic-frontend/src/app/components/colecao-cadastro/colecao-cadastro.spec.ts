import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColecaoCadastro } from './colecao-cadastro';

describe('ColecaoCadastro', () => {
  let component: ColecaoCadastro;
  let fixture: ComponentFixture<ColecaoCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColecaoCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(ColecaoCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
