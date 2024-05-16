const neatCSV = require('neat-csv');
// import parse from 'csv-simple-parser';
const { parse } = require('csv-parse');
const fs = require('fs');

describe("Read the CSV file", () => {
    let tableData;

    before("get the table data", () => {
        cy.fixture("intermediary.csv")
            .then(neatCSV)
            .then(data => {
                tableData = data;
                console.table(tableData);
                const jsonData = JSON.stringify(data);
                cy.writeFile('cypress/fixtures/reportResponse.json', data);
            });

    });



    it("using the stringify neat-csv format",()=>{

        cy.readFile("cypress/fixtures/reportResponse.json").then((resData)=>{
            cy.log(resData[0][0])
        })
    })

    it.skip("simple parser",()=>{
        cy.fixture("intermediary.csv").then((data) => {
            parse(data, {bom: true,delimiter: ',' }, (err, output) => {
              if (err) {
                console.error(err);
                return;
              }
              const jsonData = JSON.stringify(output);
              cy.writeFile('cypress/fixtures/reportResponseTwo.json', jsonData);
            });
          });
    });



    it.skip("using parser in task commend", () => {
        cy.task('readCSVFile', { filePath: "cypress/fixtures/intermediary.csv", jsonFilePath: "cypress/fixtures/reportResponse2.json" })
            .then(() => {
                cy.readFile("cypress/fixtures/reportResponse2.json").then((testData) => {
                    var firstRow = testData[4]; // Assuming you want to use the 5th row (index 4) from the JSON file
                    cy.log(firstRow);
                    // Now you can use the data from the JSON file in your test
                    // For example, you can use it to perform assertions or interact with your application
                });
            })
            .catch((err) => {
                // Handle any errors that occurred during the reading or storing process
                throw err;
            });
    });
    
});
