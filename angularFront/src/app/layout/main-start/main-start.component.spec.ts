import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStartComponent } from './main-start.component';

describe('MainStartComponent', () => {
  let component: MainStartComponent;
  let fixture: ComponentFixture<MainStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
