import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faqs = [
    {
      pregunta: '¿Cuáles son los servicios informáticos que ofrecen?',
      respuesta: 'Ofrecemos servicios de desarrollo de software, consultoría en tecnología, soporte técnico y más. Puede obtener más información en nuestra página de servicios.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Cuál es el costo de sus servicios?',
      respuesta: 'El costo de nuestros servicios puede variar según el proyecto o la necesidad específica del cliente. Le recomendamos ponerse en contacto con nosotros para obtener un presupuesto personalizado.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Cuál es el tiempo de entrega de los proyectos?',
      respuesta: 'El tiempo de entrega de proyectos puede variar según la complejidad y el alcance del proyecto. Trabajaremos estrechamente con usted para establecer plazos realistas.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Cómo puedo contactarlos para obtener más información?',
      respuesta: 'Puede ponerse en contacto con nosotros a través del formulario de contacto en nuestro sitio web o llamarnos directamente al número de teléfono proporcionado en la sección de contacto.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Cuál es la misión de su empresa en el campo de la tecnología?',
      respuesta: 'Desde nuestro inicio, hemos tenido una única misión: transformar ideas en soluciones tecnológicas impactantes. Con una combinación de creatividad y técnica, nuestro equipo de profesionales apasionados se dedica a ofrecer productos de vanguardia que superan las expectativas.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Qué servicios de desarrollo de aplicaciones personalizadas ofrecen?',
      respuesta: 'Ofrecemos servicios de desarrollo de aplicaciones personalizadas diseñadas a medida para satisfacer las necesidades específicas de nuestros clientes.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Pueden proporcionar detalles sobre el mantenimiento de sistemas informáticos que ofrecen?',
      respuesta: ' Nuestro equipo brinda servicios de mantenimiento de sistemas informáticos para garantizar que sus sistemas funcionen de manera óptima y estén actualizados. Esto incluye correcciones de errores, actualizaciones de software y soporte técnico continuo.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Qué tipo de asesorías tecnológicas proporcionan?',
      respuesta: 'Ofrecemos servicios de asesoría tecnológica para ayudar a nuestros clientes a tomar decisiones informadas sobre tecnología. Esto puede incluir recomendaciones sobre soluciones de software, estrategias de implementación y consultoría en tecnología.',
      expandido: false // Agrega la propiedad expandido
    },
    {
      pregunta: '¿Proporcionan servicios de hosting o alojamiento web?',
      respuesta: 'Sí, ofrecemos servicios de hosting o alojamiento web para alojar sitios web y aplicaciones. Nuestros servicios de hosting son confiables y seguros.',
      expandido: false // Agrega la propiedad expandido
    }
  ];

  constructor() {}

}
