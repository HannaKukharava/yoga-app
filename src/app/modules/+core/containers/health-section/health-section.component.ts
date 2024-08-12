import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-health-section',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './health-section.component.html',
  styleUrl: './health-section.component.css',
})
export class HealthSectionComponent {}
