import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFormComponent } from './nav-form.component';

describe('NavFormComponent', () => {
  let component: NavFormComponent;
  let fixture: ComponentFixture<NavFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
