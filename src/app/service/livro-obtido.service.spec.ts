import { TestBed } from '@angular/core/testing';

import { LivroObtidoService } from './livro-obtido.service';

describe('LivroObtidoService', () => {
  let service: LivroObtidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroObtidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
