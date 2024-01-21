import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios/servicios.component';
import { AcercaDeComponent } from './acercaDe/acerca-de/acerca-de.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { EquipoComponent } from './equipo/equipo.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';
import { FaqsComponent } from './faqs/faqs.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CardReversibleComponent } from './card-reversible/card-reversible.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiciosComponent,
    AcercaDeComponent,
    PortafolioComponent,
    TestimoniosComponent,
    EquipoComponent,
    BlogComponent,
    ContactoComponent,

    FaqsComponent,
      InicioComponent,
      FooterComponent,
      GaleriaComponent,
      CardReversibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
