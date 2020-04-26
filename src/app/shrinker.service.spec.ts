import { TestBed } from '@angular/core/testing';

import { ShrinkerService } from './shrinker.service';

describe('ShrinkerService', () => {
  let service: ShrinkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShrinkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
