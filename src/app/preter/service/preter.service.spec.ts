import { TestBed } from '@angular/core/testing';

import { PreterService } from './preter.service';

describe('PreterService', () => {
  let service: PreterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
