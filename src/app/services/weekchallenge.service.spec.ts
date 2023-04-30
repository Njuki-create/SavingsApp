import { TestBed } from '@angular/core/testing';

import { WeekchallengeService } from './weekchallenge.service';

describe('WeekchallengeService', () => {
  let service: WeekchallengeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekchallengeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
