import { TestBed } from '@angular/core/testing';

import { HttpprogressService } from './httpprogress.service';

describe('HttpprogressService', () => {
  let service: HttpprogressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpprogressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
