const { error } = require("console");

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Cypress' };
            // resolve(data);// Simulating a successful response
            resolve(data);
        }, 1000); // Simulates a delay of 1 second
        //   reject(error);
    });
};

describe("", () => {
    it("", () => {
        fetchData()
            .then((data) => {
                cy.log('Data received:', data);
            })
            .catch((error) => {
                console.error('Error:', error); // if we need error then change the variable data --> data1
            })
            .finally(() => {
                cy.log('Fetch operation completed.');
            });

    });

});



