import { TestBed } from '@angular/core/testing';

import { LoadingInterceptorInterceptor } from './loading-interceptor.interceptor';

describe('LoadingInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingInterceptorInterceptor = TestBed.inject(LoadingInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
