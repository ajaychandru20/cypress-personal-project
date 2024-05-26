describe("Intercept concepts", () => {

    it("Spying on Requests", () => {
        // Intercept the network request
        cy.intercept('GET', '**/web/index.php/auth/login').as('getLoginPage');
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Wait for the intercepted request and assert the status code
        cy.wait('@getLoginPage');

        // Perform the login action
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
    });
    it('Stubbing a Response', () => {
        cy.intercept('GET', '**/web/index.php/auth/login').as('getLoginPage');
        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Wait for the intercepted request and assert the status code
        cy.wait('@getLoginPage');

        // Perform the login action
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();

        cy.intercept('GET', '**/dashboard/employees/action-summary', {
            statusCode: 200,
            body: {
                data: [
                    { id: 4, group: "Pending Self Reviews", pendingActionCount: 1 },
                    { id: 5, group: "Candidates To Interview", pendingActionCount: 1 }
                ]
            }
        }).as('loginAction');

        cy.wait('@loginAction').its('response.statusCode').should('eq', 200)
    });
    it("Simulating Network Conditions", () => {

        cy.intercept('GET','**/web/index.php/auth/login',(req)=>{
            req.on('response',(res)=>{
                res.setDelay(5000) // Delay the response by 2 seconds
                res.setThrottle(200) // kbps
            })
        }).as('delayLogin')

        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Waiting for the request and asserting the response time
        cy.wait('@delayLogin')
        // Perform the login action
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
    })

});