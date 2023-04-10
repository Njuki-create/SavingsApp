import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetuppasswordComponent } from './setuppassword.component';

describe('SetuppasswordComponent', () => {
  let component: SetuppasswordComponent;
  let fixture: ComponentFixture<SetuppasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetuppasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetuppasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
