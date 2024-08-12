import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineSectionComponent } from './routine-section.component';

describe('RoutineSectionComponent', () => {
  let component: RoutineSectionComponent;
  let fixture: ComponentFixture<RoutineSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutineSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
