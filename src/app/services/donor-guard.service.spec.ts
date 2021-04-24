import { TestBed } from '@angular/core/testing';

import { DonorGuardService } from './donor-guard.service';

describe('DonorGuardService', () => {
  let service: DonorGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
