import { TestBed } from '@angular/core/testing';

import { LocalInternService } from './local-intern.service';

describe('LocalInternService', () => {
  let service: LocalInternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalInternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
