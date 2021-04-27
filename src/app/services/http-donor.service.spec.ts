import { TestBed } from '@angular/core/testing';

import { HttpDonorService } from './http-donor.service';

describe('HttpDonorService', () => {
  let service: HttpDonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
