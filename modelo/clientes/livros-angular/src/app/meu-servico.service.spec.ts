import { TestBed } from '@angular/core/testing';

import { MeuServicoService } from './meu-servico.service';

describe('MeuServicoService', () => {
  let service: MeuServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
