const URLAPI = "http://localhost:8080"

export async function pedirEquipos() {
    const requestOptions = {
        method: 'GET',
    }
    const respuestaPagina = await fetch(`${URLAPI}/equipos`, requestOptions);
    const respuestaJson = await respuestaPagina.json();

    return respuestaJson
}

export function borrarUnEquipo(idEquipo) {
    
}
export async function pedirUnEquipo(idEquipo) {
    const requestOptions = {
        method: 'GET',
    }
    const respuestaPagina = await fetch(`${URLAPI}/equipo/${idEquipo}/ver`, requestOptions);
    const respuestaJson = await respuestaPagina.json();
    console.log("estoy en servicio pedir equipo",respuestaJson);
    return respuestaJson;
}