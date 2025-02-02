import { TestBed } from '@angular/core/testing';

import { CreateBaseService } from './create-base.service';

describe('CreateBaseService', () => {
  let service: CreateBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
