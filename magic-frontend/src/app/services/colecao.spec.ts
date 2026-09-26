import { TestBed } from '@angular/core/testing';
import { Colecao } from './colecao';

describe('Colecao', () => {
  let service: Colecao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Colecao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
