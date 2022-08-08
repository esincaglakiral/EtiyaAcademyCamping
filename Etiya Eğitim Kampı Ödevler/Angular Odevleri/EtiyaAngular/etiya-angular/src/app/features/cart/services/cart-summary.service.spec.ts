import { TestBed } from '@angular/core/testing';

import { CartSummaryService } from './cart-summary.service';

describe('CartSummaryService', () => {
  let service: CartSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
