import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonationboxComponent } from './show-donationbox.component';

describe('ShowDonationboxComponent', () => {
  let component: ShowDonationboxComponent;
  let fixture: ComponentFixture<ShowDonationboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDonationboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDonationboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
