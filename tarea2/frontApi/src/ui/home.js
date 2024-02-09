
export async function listarEquipos(equipos) {
    equipos.forEach(equipo => {
        console.log(equipo.crestUrl)
        agregarEscudoAlMain(equipo.crestUrl,equipo.name);
    });
}

export function agregarEscudoAlMain(imagenEscudo,name) {
        // Crear elementos y configurar sus atributos y contenido
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
      
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'main__card');
        cardDiv.style.display = 'inline-block';
      
        const img = document.createElement('img');
        img.src = imagenEscudo;
        
        img.alt = '...';
      
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');
      
        // const title = document.createElement('h5');
        // title.classList.add('card-title');
        // title.textContent = `#${idPokemon}`;
      
        // Agregar elementos al árbol DOM
        // cardBodyDiv.appendChild(title);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);
        colDiv.addEventListener('click', function () {
           window.location.href= "/paginaEquipo.html"
           nombre(name)
          });
        const rowElement = document.querySelector('.row');
        rowElement.appendChild(colDiv);
}


function nombre(p) {
    let body= document.querySelector("body");
    let titulo = document.createElement("h1")
    titulo.textContent=p
    body.appendChild(titulo)
}