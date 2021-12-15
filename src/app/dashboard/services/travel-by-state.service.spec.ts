import { TestBed } from '@angular/core/testing';

import { TravelByStateService } from './travel-by-state.service';

describe('TravelByStateService', () => {
  let service: TravelByStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelByStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
