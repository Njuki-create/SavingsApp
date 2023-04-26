import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmoneyComponent } from './requestmoney.component';

describe('RequestmoneyComponent', () => {
  let component: RequestmoneyComponent;
  let fixture: ComponentFixture<RequestmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestmoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
