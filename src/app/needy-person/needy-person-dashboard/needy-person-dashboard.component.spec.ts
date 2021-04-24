import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyPersonDashboardComponent } from './needy-person-dashboard.component';

describe('NeedyPersonDashboardComponent', () => {
  let component: NeedyPersonDashboardComponent;
  let fixture: ComponentFixture<NeedyPersonDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedyPersonDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedyPersonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
