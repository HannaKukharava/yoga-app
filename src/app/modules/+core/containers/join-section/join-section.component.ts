import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { JoinUsFormComponent } from '../../components/join-us-form/join-us-form.component';

@Component({
  selector: 'app-join-section',
  standalone: true,
  imports: [NgOptimizedImage, JoinUsFormComponent],
  templateUrl: './join-section.component.html',
  styleUrl: './join-section.component.css',
})
export class JoinSectionComponent {}
