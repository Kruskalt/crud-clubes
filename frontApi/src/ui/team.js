export function listarInformacionDelEquipo(equipo) {
  console.log(equipo);
  const $imgEscudo = document.querySelector('.escudo-equipo');
  const urlImagen = equipo.crestUrl;
  if (urlImagen !== undefined && urlImagen.startsWith('https://')) {
    $imgEscudo.src = `${equipo.crestUrl}`;
  } else {
    $imgEscudo.src = `/${equipo.crestUrl}`;
  }
  const $titulo = document.querySelector('.titulo');
  $titulo.textContent = `${equipo.name}`;
  document.querySelector('#fundacion').textContent = `${equipo.founded}`;
  document.querySelector('#direccion').textContent = `${equipo.address}`;
  document.querySelector('#telefono').textContent = `${equipo.phone}`;
  document.querySelector('#website').href = `${equipo.website}`;
  document.querySelector('#website').textContent = `${equipo.website}`;
  document.querySelector('#email').textContent = `${equipo.email}`;
  document.querySelector('#email').href = `mailto:${equipo.email}`;
  document.querySelector('#estadio').textContent = `${equipo.venue}`;
}

export function obtenerIdUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  return id;
}

export function borrarElEquipo(equipoSeleccionadoCallback = () => { }) {
  const $botBorrar = document.querySelector('.borrar');
  $botBorrar.addEventListener('click', () => equipoSeleccionadoCallback(obtenerIdUrl()));
}

export function asginarEventosABotonesEditar(funcionCallback = () => { }) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const $botones = document.querySelectorAll('.editar');
  $botones.forEach((elem) => {
    elem.addEventListener('click', () => {
      verificarQueDatoSeQuiereEditar(elem, funcionCallback, id);
    });
  });
}
function verificarQueDatoSeQuiereEditar(elem, funcionCallback, id) {
  if (elem.classList.contains('editar-imagen')) {
    const valorDelCambio = document.querySelector('#imagen').files[0];   
    editarImagenEvento(id);
  }
  if (elem.classList.contains('editar-nombre')) {
    const valorDelCambio = document.querySelector('#nombre');    
    console.log(valorDelCambio)
    funcionCallback(id, "name", valorDelCambio.value);
  }
  if (elem.classList.contains('editar-direccion')) {
    const valorDelCambio = document.querySelector('#direccion-nueva');
    console.log(valorDelCambio)
    funcionCallback(id, "address",  valorDelCambio.value);
  }
  if (elem.classList.contains('editar-telefono')) {
    const valorDelCambio = document.querySelector('#telefono-nueva');
    funcionCallback(id, "phone", valorDelCambio.value);
  }
  if (elem.classList.contains('editar-email')) {
    const valorDelCambio = document.querySelector('#email-nueva');
    funcionCallback(id, "email", valorDelCambio.value);
  }
  if (elem.classList.contains('editar-website')) {
    const valorDelCambio = document.querySelector('#website-nueva');
    funcionCallback(id, "website", valorDelCambio.value);
  }
  if (elem.classList.contains('editar-fundacion')) {
    const valorDelCambio = document.querySelector('#fundacion-nueva');
    funcionCallback(id, "founded", valorDelCambio.value);
  }
  if (elem.classList.contains('editar-cancha')) {
    const valorDelCambio = document.querySelector('#cancha-nueva');
    funcionCallback(id, "venue", valorDelCambio.value);
  }
}

function editarImagenEvento(id) {
  const formularioSubir = document.getElementById('formulario-subir');
  formularioSubir.addEventListener('submit', function(event) {
     
    const actionURL = `http://localhost:8080/subir-imagen/${id}`;
    
    
    formularioSubir.action = actionURL;
  });
}

export function editarEquipo() {
  const $botonEditar = document.querySelector('.Editar');

  $botonEditar.addEventListener('click', () => {
    const $modal = document.querySelector('.modal');
    $modal.style.display = 'grid';
  });
}

export function cerrarModal() {
  const $cerrarModal = document.querySelector('.close');
  const $modal = document.querySelector('.modal');
  $cerrarModal.addEventListener('click', () => {
    $modal.style.display = 'none';
  });
}
