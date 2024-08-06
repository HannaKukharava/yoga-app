import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { menuItems } from '../../../../utils/nav-menu-utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = signal(true);

  protected readonly menuItems = menuItems;

  toggleMenu(): void {
    this.collapsed.update(val => !val);
  }

  closeMenu(): void {
    this.collapsed.set(true);
  }
}
