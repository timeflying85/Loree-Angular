import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { painResolver } from './pain.resolver';

describe('painResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => painResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
