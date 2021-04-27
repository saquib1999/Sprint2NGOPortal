import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEmployeeByNameComponent } from './find-employee-by-name.component';

describe('FindEmployeeByNameComponent', () => {
  let component: FindEmployeeByNameComponent;
  let fixture: ComponentFixture<FindEmployeeByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindEmployeeByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEmployeeByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
