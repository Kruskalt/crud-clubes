/// <reference types="Cypress"/>
const URL = '192.168.0.49:8081'
context("validarEquipos", () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  describe("validacion grafica", () => {
    it("validar que aparezcan los escudos de los equipos en pantalla", () => {
      
      cy.intercept("GET","http://localhost:8080/equipos",{fixture:'equipos.json'}).as("obtenerEquipos")
      
      cy.get(".row .col img").should("have.length",20)

    });
  
  });

})
