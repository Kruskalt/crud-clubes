import { pedirUnEquipo,borrarUnEquipo} from "../../frontApi/src/servicios/servicios.js";
import { listarInformacionDelEquipo, obtenerIdUrl,borrarElEquipo,editarEquipo,cerrarModal} from "../src/ui/team.js"; 
 
 


async function inicializar() {
     listarInformacionDelEquipo(await pedirUnEquipo(obtenerIdUrl()));
     borrarElEquipo(borrarUnEquipo);
     editarEquipo();
     cerrarModal();
}
inicializar();
