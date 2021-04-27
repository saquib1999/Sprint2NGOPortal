import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDonationComponent } from './approve-donation.component';

describe('ApproveDonationComponent', () => {
  let component: ApproveDonationComponent;
  let fixture: ComponentFixture<ApproveDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
