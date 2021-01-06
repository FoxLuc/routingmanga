import { TestBed } from '@angular/core/testing';

import { MangaapiService } from './mangaapi.service';

describe('MangaapiService', () => {
  let service: MangaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
