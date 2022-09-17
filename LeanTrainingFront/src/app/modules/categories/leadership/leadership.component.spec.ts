import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipComponent } from './leadership.component';

describe('LeadershipComponent', () => {
  let component: LeadershipComponent;
  let fixture: ComponentFixture<LeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
