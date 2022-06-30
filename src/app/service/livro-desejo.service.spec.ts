import { TestBed } from '@angular/core/testing';

import { LivroDesejoService } from './livro-desejo.service';

describe('LivroDesejoService', () => {
  let service: LivroDesejoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroDesejoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
