import { TestBed } from '@angular/core/testing';

import { ErrorHandlingInterceptor } from './error-handling.interceptor';

describe('ErrorHandlingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHandlingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHandlingInterceptor = TestBed.inject(ErrorHandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
