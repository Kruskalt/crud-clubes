
import { pedirEquipos } from "./servicios/servicios.js";
import { listarEquipos } from "./ui/home.js";

function irApaginaDelEquipo(equipo) {
    window.location.href = `tarea2/frontApi/templates/equipo?id=${equipo.id}`;
}

async function inicializar() {

listarEquipos(await pedirEquipos(),irApaginaDelEquipo);
}
inicializar();



