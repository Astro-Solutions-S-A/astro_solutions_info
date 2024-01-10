import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient) {}

  enviarFormulario() {


    const data = {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje,
    };



    this.http.post('http://localhost:3000/enviar-correo', data)
      .subscribe(response => {
        console.log('Formulario enviado con éxito');
        // Realiza cualquier otra acción necesaria después de enviar el correo.
      }, error => {
        console.error('Error al enviar el formulario', error);
      });
  }
}
