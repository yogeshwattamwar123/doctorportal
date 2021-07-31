import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewpatientsComponent } from './addnewpatients.component';

describe('AddnewpatientsComponent', () => {
  let component: AddnewpatientsComponent;
  let fixture: ComponentFixture<AddnewpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
