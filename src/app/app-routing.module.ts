import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios/servicios.component';
import { AcercaDeComponent } from './acercaDe/acerca-de/acerca-de.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { EquipoComponent } from './equipo/equipo.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'testimonios', component: TestimoniosComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faqs', component: FaqsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
