const URLAPI = "http://localhost:8080"

export async function pedirEquipos() {
    const requestOptions = {
        method: 'GET',
    }
    const respuestaPagina = await fetch(`${URLAPI}/equipos`, requestOptions);
    const respuestaJson = await respuestaPagina.json();

    return respuestaJson
}

export async function borrarUnEquipo(idEquipo) {

    const confirmacion = confirm("¿Estás seguro de que deseas borrar este equipo?");
    if (!confirmacion) {
        return; 
    }
    const requestOptions = {
        method: 'DELETE',
    }
    await fetch(`${URLAPI}/borrar/${idEquipo}`, requestOptions);

    window.location.href = "/"
}

export async function pedirUnEquipo(idEquipo) {
    const requestOptions = {
        method: 'GET',
    }
    const respuestaPagina = await fetch(`${URLAPI}/equipo/${idEquipo}/ver`, requestOptions);
    const respuestaJson = await respuestaPagina.json();
    
    return respuestaJson;
}