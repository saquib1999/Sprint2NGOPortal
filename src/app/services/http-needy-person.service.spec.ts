import { TestBed } from '@angular/core/testing';

import { HttpNeedyPersonService } from './http-needy-person.service';

describe('HttpNeedyPersonService', () => {
  let service: HttpNeedyPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpNeedyPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
