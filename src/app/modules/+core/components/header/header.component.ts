import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { menuItems } from '@app/utils/nav-menu-utils';
import { OnScrollDirective } from '../../directives/on-scroll.directive';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { AppInfoStore } from '@store/app-info.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, OnScrollDirective, RouterLinkActive],
  providers: [AppInfoStore],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly route: ActivatedRoute = inject(ActivatedRoute);
  readonly store = inject(AppInfoStore);
  collapsed = signal(true);
  activeLink = toSignal(this.route.fragment.pipe(map(item => item ?? 'home')));

  protected readonly menuItems = menuItems;

  toggleMenu(): void {
    this.collapsed.update(val => !val);
  }

  closeMenu(): void {
    this.collapsed.set(true);
  }
}
