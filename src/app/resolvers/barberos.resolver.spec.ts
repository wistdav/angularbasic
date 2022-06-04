import { TestBed } from '@angular/core/testing';

import { BarberosResolver } from './barberos.resolver';

describe('BarberosResolver', () => {
  let resolver: BarberosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BarberosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
