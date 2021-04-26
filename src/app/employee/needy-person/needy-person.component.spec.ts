import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyPersonComponent } from './needy-person.component';

describe('NeedyPersonComponent', () => {
  let component: NeedyPersonComponent;
  let fixture: ComponentFixture<NeedyPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedyPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
