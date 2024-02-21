
import { pedirEquipos } from "./servicios/servicios.js";
import { listarEquipos } from "./ui/home.js";

function irApaginaDelEquipo(equipo) {
    window.location.href = `frontApi/templates/equipo?id=${equipo.id}`;
}

async function inicializar() {

listarEquipos(await pedirEquipos(),irApaginaDelEquipo);
}
inicializar();



