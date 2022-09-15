import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavigationComponent } from './user-navigation.component';

describe('NavigationComponent', () => {
  let component: UserNavigationComponent;
  let fixture: ComponentFixture<UserNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});