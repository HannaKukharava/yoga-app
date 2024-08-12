import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../containers/home-section/home-section.component';
import { ListSectionComponent } from '../../containers/list-section/list-section.component';
import { HealthSectionComponent } from '../../containers/health-section/health-section.component';
import { RoutineSectionComponent } from '../../containers/routine-section/routine-section.component';
import { FollowSectionComponent } from '../../containers/follow-section/follow-section.component';
import { JoinSectionComponent } from '../../containers/join-section/join-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeSectionComponent,
    ListSectionComponent,
    HealthSectionComponent,
    RoutineSectionComponent,
    FollowSectionComponent,
    JoinSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent {}
