import { TestBed } from '@angular/core/testing';

import { NeedyPersonGuardService } from './needy-person-guard.service';

describe('NeedyPersonGuardService', () => {
  let service: NeedyPersonGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeedyPersonGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
