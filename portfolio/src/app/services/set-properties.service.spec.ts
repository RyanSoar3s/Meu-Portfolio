import { TestBed } from '@angular/core/testing';

import { SetPropertiesService } from './set-properties.service';

describe('SetPropertiesService', () => {
  let service: SetPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
