import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictStudentComponent } from './restrict-student.component';

describe('RestrictStudentComponent', () => {
  let component: RestrictStudentComponent;
  let fixture: ComponentFixture<RestrictStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrictStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
