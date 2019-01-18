import { TestBed } from '@angular/core/testing';

import { NgErrorService } from './ng-error.service';

describe('NgErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgErrorService = TestBed.get(NgErrorService);
    expect(service).toBeTruthy();
  });
});
