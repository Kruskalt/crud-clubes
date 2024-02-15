// http://handlebarsjs.com/guide (el lenguaje de templating handlebars)
// https://github.com/ericf/express-handlebars (esta librería)
// https://expressjs.com/en/guide/using-template-engines.html (cómo express usa template engines)
// multer es para subir archivos de un form que tiene type enctype multipart/form-data


// nodejs core, fs = filesystem
const fs = require('fs');
const express = require('express');
const multer = require('multer');

const upload = multer({ dest: './uploads/imagenes' });
const exphbs = require('express-handlebars');

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// esto define que el directorio /uploads contiene assets estáticos,
// que se deben servir tal cual están
// notar que no hace falta ir a localhost:8080/uploads
// https://expressjs.com/en/starter/static-files.html
app.use(express.static(`${__dirname}/uploads`));

const nombre = 'Fabricio';

app.get('/', (req, res) => {
  const equipos = fs.readFileSync('./data/equipos.json');
  const objetoJson = JSON.parse(equipos);

  res.render('home_ejemplo', {
    layout: 'ejemplo',
    data: {
      nombre,
      // notar que esta función se ejecuta al renderear la vista, 
      // en el servidor, no en el navegador.
      nombreMayusculas: () => nombre.toUpperCase(),
      listado: [1, 2, 3, 4],
      esPar: Math.ceil(Math.random() * 1000) % 2 === 0,
      objetoJson,
    },
  });
});


app.get('/form', (req, res) => {
  res.render('form_agregar', {
    layout: 'ejemplo',
  });

});

app.post('/form', upload.single('imagen'), (req, res) => {
  console.log(req.file);
  let equipos = fs.readFileSync('./data/equipos.json');
  let objetoJson = JSON.parse(equipos);

  objetoJson.push({
    "id": asignarUnId(objetoJson), "name": req.body.nombre,
    "address": req.body.direccion,
    "crestUrl": "/imagenes/" + req.file.filename,
    "area": { "name": req.body.pais },
    "phone": req.body.telefono,
    "website": req.body.website

  })

  fs.writeFileSync('./data/equipos.json', JSON.stringify(objetoJson));
  res.redirect('/')
});

app.get('/equipos', (req, res) => {
  const equipos = fs.readFileSync('./data/equipos.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(equipos);
});

app.get('/borrar/:id', (req, res) => {
  const equipos = fs.readFileSync('./data/equipos.json');
  const objetoJson = JSON.parse(equipos);
  const nuevoArray = objetoJson.filter(objeto => objeto.id !== Number(req.params.id));
  fs.writeFileSync('./data/equipos.json', JSON.stringify(nuevoArray));
  res.redirect('/')
});

app.get('/form/:id/editar', (req, res) => {
  res.render('form_editar', {
    layout: 'editar',
    data: {
      id: req.params.id,
    }
  });

});
app.post('/equipo/:id/editar', upload.single('imagen'), (req, res) => {
  const equipos = fs.readFileSync('./data/equipos.json');
  const objetoJson = JSON.parse(equipos);
  const indiceEquipo = objetoJson.findIndex(objeto => objeto.id === Number(req.params.id));

  if (indiceEquipo !== -1) { 
    if (req.file !== undefined) {
      objetoJson[indiceEquipo].crestUrl = "/imagenes/" + req.file.filename;
    }
    if (req.body.nombre!== "") {
      objetoJson[indiceEquipo].name = req.body.nombre;
    }
    if (req.body.direccion !== "") {
      objetoJson[indiceEquipo].address = req.body.direccion;
    }
    if (req.body.pais !== "") {
      objetoJson[indiceEquipo].area.name = req.body.pais;
    }
    if (req.body.telefono !== "") {
      objetoJson[indiceEquipo].phone = req.body.telefono;
    }
    if (req.body.website !== "") {
      objetoJson[indiceEquipo].website = req.body.website;
    }
  }

  
  fs.writeFileSync('./data/equipos.json', JSON.stringify(objetoJson));
  res.redirect('/')
});

app.get('/equipo/:id/ver', (req, res) => {
  const equipos = fs.readFileSync('./data/equipos.json');
  const objetoJson = JSON.parse(equipos);
  const objetoEquipo = objetoJson.find(objeto => objeto.id === Number(req.params.id));
  res.render('equipo_body', {
    layout: 'equipo',
    data: {
      id: objetoEquipo.id,
      escudo: objetoEquipo.crestUrl,
      nombre: objetoEquipo.name,
      direccion: objetoEquipo.address,
      pais: objetoEquipo.area.name,
      telefono: objetoEquipo.phone,
      web: objetoEquipo.website,
    },
  });
  
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