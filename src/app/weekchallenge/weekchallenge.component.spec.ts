import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekchallengeComponent } from './weekchallenge.component';

describe('WeekchallengeComponent', () => {
  let component: WeekchallengeComponent;
  let fixture: ComponentFixture<WeekchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekchallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
