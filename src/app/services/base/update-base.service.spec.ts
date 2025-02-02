import { TestBed } from '@angular/core/testing';

import { UpdateBaseService } from './update-base.service';

describe('UpdateBaseService', () => {
  let service: UpdateBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
