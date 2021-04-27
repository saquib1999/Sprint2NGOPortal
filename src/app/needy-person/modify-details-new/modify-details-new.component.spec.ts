import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDetailsNewComponent } from './modify-details-new.component';

describe('ModifyDetailsNewComponent', () => {
  let component: ModifyDetailsNewComponent;
  let fixture: ComponentFixture<ModifyDetailsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDetailsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDetailsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
