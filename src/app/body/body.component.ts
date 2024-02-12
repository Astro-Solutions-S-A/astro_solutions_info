import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  mostrarSeccionesAnclaje = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.mostrarSeccionesAnclaje = !event.url.includes('/faqs');
    });
  }

  mostrarBotonIrArriba = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Establece un umbral de desplazamiento, por ejemplo, 100px
    const umbral = 100;
    const yOffSet = window.pageYOffset;
    this.mostrarBotonIrArriba = yOffSet > umbral;
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
