const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'Cypress' });
      }, 1000);
    });
  };
describe('Fetch Data Test Without cy.wrap', () => {
    it('should fetch data and verify the result', () => {
      fetchData().then((data) => {
        expect(data).to.have.property('id', 1);
        expect(data).to.have.property('name', 'Cypress');
      });
    //   cy.get('.some-element').should('be.visible');
    });
  });

  describe('Fetch Data Test With cy.wrap', () => {
    it('should fetch data and verify the result', () => {
      cy.wrap(fetchData()).then((data) => {
        expect(data).to.have.property('id', 1);
        expect(data).to.have.property('name', 'Cypress');
      });
    //   cy.get('.some-element').should('be.visible');
    });
  });