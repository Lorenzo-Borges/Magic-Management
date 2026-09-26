import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialCadastro } from './tutorial-cadastro';

describe('TutorialCadastro', () => {
  let component: TutorialCadastro;
  let fixture: ComponentFixture<TutorialCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
