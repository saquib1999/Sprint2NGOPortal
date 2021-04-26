import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNeedyPersonComponent } from './all-needy-person.component';

describe('AllNeedyPersonComponent', () => {
  let component: AllNeedyPersonComponent;
  let fixture: ComponentFixture<AllNeedyPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNeedyPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNeedyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
