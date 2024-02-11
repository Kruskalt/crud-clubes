import { listarEquipos } from "../home.js";


test('agrega los equipos al home', () => {
    document.body.innerHTML = '<div class="row"></div><span class="close ">&times;</span>';
    const equipos = [{crestUrl:"imagenEquipo1",name:"River"},
    {crestUrl:"imagenEquipo2",name:"Boca"}]
    listarEquipos(equipos,(nombre) => {console.log(nombre);});

    expect(document.querySelectorAll(".card").length).toBe(2);
    expect(document.querySelector("img").getAttribute("src")).toBe("imagenEquipo1")
    
  });
