import { TestBed } from '@angular/core/testing';

import { ResponsiveComponentValuesService } from './responsive-component-values.service';

describe('ResponsiveComponentValuesService', () => {
  let service: ResponsiveComponentValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveComponentValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
