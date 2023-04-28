import { TestBed } from '@angular/core/testing';

import { SetuppasswordService } from './passwordresponse.service';

describe('SetuppasswordService', () => {
  let service: SetuppasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetuppasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
