import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactoringComponent } from './manufactoring.component';

describe('ManufactoringComponent', () => {
  let component: ManufactoringComponent;
  let fixture: ComponentFixture<ManufactoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufactoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
