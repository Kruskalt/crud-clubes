// http://handlebarsjs.com/guide (el lenguaje de templating handlebars)
// https://github.com/ericf/express-handlebars (esta librería)
// https://expressjs.com/en/guide/using-template-engines.html (cómo express usa template engines)
// multer es para subir archivos de un form que tiene type enctype multipart/form-data


// nodejs core, fs = filesystem
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const cors = require('cors')

const upload = multer({ dest: './uploads/imagenes' });
const exphbs = require('express-handlebars');

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(cors());
// esto define que el directorio /uploads contiene assets estáticos,
// que se deben servir tal cual están
// notar que no hace falta ir a localhost:8080/uploads
// https://expressjs.com/en/starter/static-files.html
app.use(express.static(`${__dirname}/uploads`));

app.get('/equipos', (req, res) => {
  const equipos = fs.readFileSync('./data/equipos.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(equipos);
});

app.post('/form', upload.single('imagen'), (req, res) => {
  
  const equipos = fs.readFileSync('./data/equipos.json');
  const objetoJson = JSON.parse(equipos);

  objetoJson.push({
    "id": asignarUnId(objetoJson), "name": req.body.nombre,
    "address": req.body.direccion,
    "crestUrl": "tarea2/webApi/uploads/imagenes/" + req.file.filename,
    "area": { "name": req.body.pais },
    "phone": req.body.telefono,
    "website": req.body.website

  })

  fs.writeFileSync('./data/equipos.json', JSON.stringify(objetoJson));
  res.redirect('http://192.168.0.49:8081/');
});



app.listen(PUERTO);
console.log(`Escuchando en http://localhost:${PUERTO}`);


function asignarUnId(array) {
  let id = Math.ceil(Math.random() * 2000);
  while (array.find(objeto => objeto.id === id)) {
    id = Math.ceil(Math.random() * 2000);
  }
  return id;
}