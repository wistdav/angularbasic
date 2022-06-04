import { TestBed } from '@angular/core/testing';

import { ComprobarGuard } from './comprobar.guard';

describe('ComprobarGuard', () => {
  let guard: ComprobarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ComprobarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
