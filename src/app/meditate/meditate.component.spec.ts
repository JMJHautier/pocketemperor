import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditateComponent } from './meditate.component';

describe('MeditateComponent', () => {
  let component: MeditateComponent;
  let fixture: ComponentFixture<MeditateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
