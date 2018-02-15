import { TestBed, inject } from '@angular/core/testing';

import { GirlsListService } from './girls-list.service';

describe('GirlsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GirlsListService]
    });
  });

  it('should be created', inject([GirlsListService], (service: GirlsListService) => {
    expect(service).toBeTruthy();
  }));
});
