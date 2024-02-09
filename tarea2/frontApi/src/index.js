import { pedirEquipos } from "./servicios/servicios.js";
import { listarEquipos } from "./ui/home.js";


async function inicializar() {

listarEquipos(await pedirEquipos());
}
inicializar();
