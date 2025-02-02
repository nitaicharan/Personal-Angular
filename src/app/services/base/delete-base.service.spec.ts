import { TestBed } from '@angular/core/testing';

import { DeleteBaseService } from './delete-base.service';

describe('DeleteBaseService', () => {
  let service: DeleteBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
