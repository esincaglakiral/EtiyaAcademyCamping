import { TestBed } from '@angular/core/testing';

import { LocalStrorageService } from './local-strorage.service';

describe('LocalStrorageService', () => {
  let service: LocalStrorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStrorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
