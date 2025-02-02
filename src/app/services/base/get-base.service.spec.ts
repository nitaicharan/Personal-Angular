import { TestBed } from '@angular/core/testing';

import { GetBaseService } from './get-base.service';

describe('GetBaseService', () => {
  let service: GetBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
