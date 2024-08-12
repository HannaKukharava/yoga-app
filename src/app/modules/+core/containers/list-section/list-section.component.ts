import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-list-section',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './list-section.component.html',
  styleUrl: './list-section.component.css',
})
export class ListSectionComponent {}
