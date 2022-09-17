import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplychComponent } from './supplych.component';

describe('SupplychComponent', () => {
  let component: SupplychComponent;
  let fixture: ComponentFixture<SupplychComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplychComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
