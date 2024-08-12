import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowSectionComponent } from './follow-section.component';

describe('FollowSectionComponent', () => {
  let component: FollowSectionComponent;
  let fixture: ComponentFixture<FollowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
