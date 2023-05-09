import { TestBed } from '@angular/core/testing';

import { BiblioServiceService } from './biblio-service.service';

describe('BiblioServiceService', () => {
  let service: BiblioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiblioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
