import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgettrackerComponent } from './budgettracker.component';

describe('BudgettrackerComponent', () => {
  let component: BudgettrackerComponent;
  let fixture: ComponentFixture<BudgettrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgettrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgettrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
