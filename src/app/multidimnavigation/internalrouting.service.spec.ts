import { TestBed } from '@angular/core/testing';

import { InternalroutingService } from './internalrouting.service';

describe('InternalroutingService', () => {
  let service: InternalroutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalroutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
