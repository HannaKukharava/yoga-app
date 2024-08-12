import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../containers/home-section/home-section.component';
import { ListSectionComponent } from '../../containers/list-section/list-section.component';
import { HealthSectionComponent } from '../../containers/health-section/health-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSectionComponent, ListSectionComponent, HealthSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent {}
