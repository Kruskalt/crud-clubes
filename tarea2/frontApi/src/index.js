import { pedirEquipos } from "./servicios/servicios.js";
import { listarEquipos } from "./ui/home.js";

function irApaginaDelEquipo(nombre) {
    window.location.href = `tarea2/frontApi/templates/equipo?name=${nombre}`;
}

async function inicializar() {

listarEquipos(await pedirEquipos(),irApaginaDelEquipo);
}
inicializar();



