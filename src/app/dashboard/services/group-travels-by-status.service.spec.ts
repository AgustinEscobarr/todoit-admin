import { TestBed } from '@angular/core/testing';

import { GroupTravelsByStatusService } from './group-travels-by-status.service';

describe('GroupTravelsByStatusService', () => {
  let service: GroupTravelsByStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupTravelsByStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
