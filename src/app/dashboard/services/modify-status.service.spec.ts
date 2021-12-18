import { TestBed } from '@angular/core/testing';

import { ModifyStatusService } from './modify-status.service';

describe('ModifyStatusService', () => {
  let service: ModifyStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
