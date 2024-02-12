import { pedirUnEquipo } from "../../frontApi/src/servicios/servicios.js";
import { listarInformacionDelEquipo, obtenerIdUrl} from "../src/ui/team.js"; 
 
 


async function inicializar() {
     listarInformacionDelEquipo(await pedirUnEquipo(obtenerIdUrl()));
}
inicializar();
