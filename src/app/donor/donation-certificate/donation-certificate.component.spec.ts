import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCertificateComponent } from './donation-certificate.component';

describe('DonationCertificateComponent', () => {
  let component: DonationCertificateComponent;
  let fixture: ComponentFixture<DonationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
