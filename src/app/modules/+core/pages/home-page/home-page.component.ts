import { Component } from '@angular/core';
import { HomeSectionComponent } from '../../containers/home-section/home-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent {}
