export async function listarEquipos(equipos, equipoSeleccionadoCallback = () => { }) {
    equipos.forEach(equipo => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'main__card');
        cardDiv.style.display = 'inline-block';
        


        const img = document.createElement('img');
        img.src = equipo.crestUrl;
        img.alt = '...';

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
        colDiv.appendChild(cardDiv);
        colDiv.onclick = () => equipoSeleccionadoCallback(equipo);

        const rowElement = document.querySelector('.row');
        rowElement.appendChild(colDiv);

    });
}