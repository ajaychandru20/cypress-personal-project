const { it, describe, beforeEach } = require("node:test");

describe("Testing the Test Shop Demo App",()=>{

    beforeEach("",()=>{
        cy.visit("https://practicesoftwaretesting.com/#/")
        cy.location('host').should('contain','https')
        cy.location('pathname').should('contain','/#/')
        cy.location('hostname').should('eq',"practicesoftwaretesting.com")
    });

    it("",()=>{

    })


});

