export function listarInformacionDelEquipo(equipo) {
    const $imgEscudo = document.querySelector(".escudo-equipo");
    const urlImagen= equipo.crestUrl;
    console.log("soy",$imgEscudo)
    
    if (urlImagen.startsWith("https://")) {
        $imgEscudo.src= `${equipo.crestUrl}`
    }else{
        $imgEscudo.src= `/${equipo.crestUrl}`
    }
   

    const $titulo = document.querySelector(".titulo")
    $titulo.textContent = `${equipo.name}`
}

export function obtenerIdUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    
    return id;
}