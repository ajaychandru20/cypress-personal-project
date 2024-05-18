const neatCSV = require('neat-csv');
// import parse from 'csv-simple-parser';
const { parse } = require('csv-parse');
const fs = require('fs');

describe("Read the CSV file", () => {
    let tableData;

    it.skip("using the stringify neat-csv format", () => {

        cy.fixture("intermediary.csv")
            .then(neatCSV)
            .then(data => {
                tableData = data;
                console.table(tableData);
                const jsonData = JSON.stringify(data, null, 2);
                cy.writeFile('cypress/fixtures/neatCsvRes.json', jsonData);
            });
        cy.readFile("cypress/fixtures/neatCsvRes.json").then((resData) => {
            cy.log(resData[0][0])
        })
    })

    it.skip("using csv-parser and fs approch in task command", () => {
        cy.task('readCSVFile', { filePath: "cypress/fixtures/intermediary.csv", jsonFilePath: "cypress/fixtures/csv_parserUsingFS.json", headers: ['emp heading', 'name'] })
            .then(() => {
                cy.readFile("cypress/fixtures/csv_parserUsingFS.json").then((testData) => {
                    console.table(testData)
                    var firstRow = testData[4]; // Assuming you want to use the 5th row (index 4) from the JSON file
                    cy.log(firstRow);
                    // Now you can use the data from the JSON file in your test
                    // For example, you can use it to perform assertions or interact with your application
                });
            })
    });

    it.skip("using akash, csv-parser and fast-csv in task command ",()=>{

        cy.task('readFromCsv',{path:'fixtures/intermediary.csv', headers: false}).then((returnData)=>{
            cy.writeFile('cypress/fixtures/csv_parserAkashApproch.json',returnData);
            cy.log(returnData[0][0])
            console.table(returnData)
        });

    })


    it.skip("simple parser", () => {
        cy.fixture("intermediary.csv").then((data) => {
            parse(data, { bom: true, delimiter: ',' }, (err, output) => {
                if (err) {
                    console.error(err);
                    return;
                }
                const jsonData = JSON.stringify(output);
                cy.writeFile('cypress/fixtures/reportResponseTwo.json', jsonData);
            });
        });
    });


});
