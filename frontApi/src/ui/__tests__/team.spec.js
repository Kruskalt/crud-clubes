import { listarInformacionDelEquipo } from "../team.js";


test('se lista la informacion del equipo en la pagina', () => {
    document.body.innerHTML = '<img src="#" alt="" class="escudo-equipo"> <h1 class="titulo"></h1> <h2 id="fundacion"> </h2> <h2 id="direccion"> </h2> <h2 id="telefono"> </h2> <h2 id="website"> </h2><h2 id="email"> </h2><h2 id="estadio"> </h2>';
    
    const equipo = {founded:"2012",crestUrl:"imagen",name:"san miguel",address:"polvorines 2945",phone:"11334",email:"sanmiguel@gmail.com",website:"sm.com.ar",venue:"rrr"}
    listarInformacionDelEquipo(equipo)

    expect(document.querySelector("#fundacion").textContent).toContain("2012");
    expect(document.querySelector(".escudo-equipo").getAttribute("src")).toBe("/imagen")
    expect(document.querySelector(".titulo").textContent).toContain("san miguel");
    expect(document.querySelector("#direccion").textContent).toContain("polvorines 2945");
    expect(document.querySelector("#telefono").textContent).toContain("11334");
    expect(document.querySelector("#email").textContent).toContain("sanmiguel@gmail.com");
    expect(document.querySelector("#website").textContent).toContain("sm.com.ar");
    expect(document.querySelector("#estadio").textContent).toContain("rrr");
  });