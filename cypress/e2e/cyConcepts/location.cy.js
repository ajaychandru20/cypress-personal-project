describe("Testing the Test Shop Demo App",()=>{

    beforeEach("",()=>{
        cy.visit("https://practicesoftwaretesting.com/#/")
        cy.location('protocol').should('contain','https')
        cy.location('pathname').should('contain','/')
        cy.location('hostname').should('eq',"practicesoftwaretesting.com")
    });

    it("select the 1st tool",()=>{
        cy.get('div img[src="assets/img/products/pliers01.jpeg"]').click()
    })


});

