const URLAPI = "http://localhost:8080"

export async function pedirEquipos() {
    const requestOptions = {
        method: 'GET',
    }
    const respuestaPagina = await fetch(`${URLAPI}/equipos`, requestOptions);
    const respuestaJson = await respuestaPagina.json();

    return respuestaJson
}