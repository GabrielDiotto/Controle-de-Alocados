import { TestBed, inject } from '@angular/core/testing';

import { AlocarService } from './alocar.service';

describe('AlocarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlocarService]
    });
  });

  it('should be created', inject([AlocarService], (service: AlocarService) => {
    expect(service).toBeTruthy();
  }));
});
