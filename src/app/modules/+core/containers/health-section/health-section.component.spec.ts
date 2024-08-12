import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSectionComponent } from './health-section.component';

describe('HealthSectionComponent', () => {
  let component: HealthSectionComponent;
  let fixture: ComponentFixture<HealthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
