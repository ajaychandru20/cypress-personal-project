describe("Excel Report interation", () => {
   it.skip("verify Contractors details test", () => {
        var csvContractorDetails = [];

        cy.task('readFromCsv', { path: 'fixtures/excelreport.csv', headers: false }).then((returnData) => {
            cy.writeFile('cypress/fixtures/csv_parserAkApproch.json', returnData);

            cy.readFile('cypress/fixtures/csv_parserAkApproch.json').then((resData) => {
                const rowLength = resData.length
                const workersHeaderPosition = resData[7];
                cy.log("Total Row length", rowLength)
                cy.log("Total Column length: ", workersHeaderPosition.length)

                // Get the contractors details
                var contractorDetailsStart = 8 //workers details starts from
                var num_con_count = rowLength-contractorDetailsStart;
                cy.log("Numbers of contractos are in the excel: ", `***${num_con_count}***`);
                // iterate the rows                 
                for (let index = 8; index < rowLength; index++) {
                    const element = resData[index];
                    // cy.log(element); // got the contractors details rows for all, in a arrayformat Array[25];

                    // mention the position what details that i want
                    var whatINeedCSV = [0, 2, 3, 4, 6, 7, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24];
                    for (let index2 = 0; index2 < whatINeedCSV.length; index2++) {
                        var ww_position = whatINeedCSV[index2]
                        var con_details = element[ww_position];
                        csvContractorDetails.push(con_details)
                    }
                }
                cy.log(whatINeedCSV.length, whatINeedCSV.length * num_con_count); // number of fields i want to check, the check fields count * total contractors
                cy.log(csvContractorDetails);
            })
        });



    })


});