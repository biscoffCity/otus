import { TestBed } from '@angular/core/testing';

import { OtusService } from './otus.service';

describe('OtusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtusService = TestBed.get(OtusService);
    expect(service).toBeTruthy();
  });
});
