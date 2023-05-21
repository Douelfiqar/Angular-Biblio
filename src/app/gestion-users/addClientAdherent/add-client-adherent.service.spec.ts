import { TestBed } from '@angular/core/testing';

import { AddClientAdherentService } from './add-client-adherent.service';

describe('AddClientAdherentService', () => {
  let service: AddClientAdherentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddClientAdherentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
