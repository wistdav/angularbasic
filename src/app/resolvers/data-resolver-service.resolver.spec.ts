import { TestBed } from '@angular/core/testing';

import { DataResolverServiceResolver } from './data-resolver-service.resolver';

describe('DataResolverServiceResolver', () => {
  let resolver: DataResolverServiceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DataResolverServiceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
