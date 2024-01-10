const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el módulo cors

const app = express();
const port = 3000;

// Configura el transporte de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'astroSolutionsSA@gmail.com',
    pass: 'vssf iwyv iabf shlp'
  }
});

// Middleware para analizar datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura CORS
app.use(cors()); // Activa CORS para todas las rutas

// Ruta para enviar el correo electrónico
app.post('/enviar-correo', cors(), (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const mailOptions = {
    from: 'astroSolutionsSA@gmail.com',
    to: 'manusl2908@gmail.com', // La dirección de correo a la que deseas enviar el mensaje
    subject: 'Mensaje de contacto',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).json({ message: 'Correo enviado con éxito' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js en funcionamiento en el puerto ${port}`);
});