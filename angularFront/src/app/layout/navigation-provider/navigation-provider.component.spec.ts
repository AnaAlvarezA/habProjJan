import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationProviderComponent } from './navigation-provider.component';

describe('NavigationProviderComponent', () => {
  let component: NavigationProviderComponent;
  let fixture: ComponentFixture<NavigationProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
