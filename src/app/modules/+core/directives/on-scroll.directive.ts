import { Directive, ElementRef, HostListener, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnScroll]',
  standalone: true,
})
export class OnScrollDirective {
  scrollThreshold = input(100);
  className = input('scrolled');

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.scrollThreshold()) {
      this.renderer.addClass(this.el.nativeElement, this.className());
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.className());
    }
  }
}
