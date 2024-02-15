export function listarInformacionDelEquipo(equipo) {
  console.log(equipo)
  const $imgEscudo = document.querySelector(".escudo-equipo");
  const urlImagen = equipo.crestUrl;
  if (urlImagen !== undefined && urlImagen.startsWith("https://")) {
    $imgEscudo.src = `${equipo.crestUrl}`;
  } else {
    $imgEscudo.src = `/${equipo.crestUrl}`;
  }
  const $titulo = document.querySelector(".titulo");
  $titulo.textContent = `${equipo.name}`;
  document.querySelector("#fundacion").textContent = `${equipo.founded}`;
  document.querySelector("#direccion").textContent = `${equipo.address}`;
  document.querySelector("#telefono").textContent = `${equipo.phone}`;
  document.querySelector("#website").href = `${equipo.website}`;
  document.querySelector("#website").textContent = `${equipo.website}`;
  document.querySelector("#email").textContent = `${equipo.email}`;
  document.querySelector("#email").href = `mailto:${equipo.email}`;
  document.querySelector("#estadio").textContent = `${equipo.venue}`;
}

export function obtenerIdUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');

  return id;
}

export function borrarElEquipo(equipoSeleccionadoCallback = () => { }) {
  const $botBorrar = document.querySelector(".borrar")
  $botBorrar.addEventListener("click", () => equipoSeleccionadoCallback(obtenerIdUrl()))
}


