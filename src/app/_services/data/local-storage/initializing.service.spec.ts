import { TestBed } from '@angular/core/testing';

import { InitializingService } from './initializing.service';

describe('InitializingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitializingService = TestBed.get(InitializingService);
    expect(service).toBeTruthy();
  });
});
