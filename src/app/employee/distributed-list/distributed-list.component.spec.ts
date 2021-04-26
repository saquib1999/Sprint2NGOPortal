import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributedListComponent } from './distributed-list.component';

describe('DistributedListComponent', () => {
  let component: DistributedListComponent;
  let fixture: ComponentFixture<DistributedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
