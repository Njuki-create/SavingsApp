import { TestBed } from '@angular/core/testing';

import { SendmoneyService } from './sendmoney.service';

describe('SendmoneyService', () => {
  let service: SendmoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendmoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
