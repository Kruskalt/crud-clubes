import { pedirEquipos } from "./servicios/servicios.js";
import { listarEquipos } from "./ui/home.js";

function irApaginaDelEquipo(nombre) {
    window.location.href = `/equipo?name=${nombre}`;
}

async function inicializar() {

listarEquipos(await pedirEquipos(),irApaginaDelEquipo);
}
inicializar();



