import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPannelComponent } from './common-pannel.component';

describe('CommonPannelComponent', () => {
  let component: CommonPannelComponent;
  let fixture: ComponentFixture<CommonPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
