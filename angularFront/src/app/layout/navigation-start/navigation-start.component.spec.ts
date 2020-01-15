import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationStartComponent } from './navigation-start.component';

describe('NavigationStartComponent', () => {
  let component: NavigationStartComponent;
  let fixture: ComponentFixture<NavigationStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
