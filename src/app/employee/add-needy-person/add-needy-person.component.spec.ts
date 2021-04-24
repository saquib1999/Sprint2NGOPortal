import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNeedyPersonComponent } from './add-needy-person.component';

describe('AddNeedyPersonComponent', () => {
  let component: AddNeedyPersonComponent;
  let fixture: ComponentFixture<AddNeedyPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNeedyPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNeedyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
