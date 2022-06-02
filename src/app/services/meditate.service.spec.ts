import { TestBed } from '@angular/core/testing';

import { MeditateService } from './meditate.service';

describe('MeditateService', () => {
  let service: MeditateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeditateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
