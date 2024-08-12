import { Component, HostListener, signal } from '@angular/core';
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

  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 50;
  }

  toggleMenu(): void {
    this.collapsed.update(val => !val);
  }

  closeMenu(): void {
    this.collapsed.set(true);
  }
}
