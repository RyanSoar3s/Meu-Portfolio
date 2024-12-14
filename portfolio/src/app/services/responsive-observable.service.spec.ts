import { TestBed } from '@angular/core/testing';

import { ResponsiveObservableService } from './responsive-observable.service';

describe('ScrollService', () => {
  let service: ResponsiveObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
