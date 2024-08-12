import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-routine-section',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './routine-section.component.html',
  styleUrl: './routine-section.component.css',
})
export class RoutineSectionComponent {}
