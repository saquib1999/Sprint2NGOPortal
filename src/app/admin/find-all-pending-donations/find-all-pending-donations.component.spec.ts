import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllPendingDonationsComponent } from './find-all-pending-donations.component';

describe('FindAllPendingDonationsComponent', () => {
  let component: FindAllPendingDonationsComponent;
  let fixture: ComponentFixture<FindAllPendingDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllPendingDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllPendingDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
