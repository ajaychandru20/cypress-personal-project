describe("Test functions", () => {

    it("test file", () => {

        var requestOrder = [
            "data.user_details[0].first_name",
            "data.user_details[0].middle_name",
            "data.user_details[0].last_name"
        ];

        cy.readFile("cypress/fixtures/jsonVerifyData.json").then((resData) => {
            var extractedValues = [];

            requestOrder.forEach(path => {
                var jsonRes = resData;
                var pathParts = path.split(/[\.\[\]]/).filter(Boolean); // 
                cy.log(pathParts);
                pathParts.forEach(part => {
                    jsonRes = jsonRes[part];
                });
                extractedValues.push(jsonRes);
            });

            cy.log(JSON.stringify(extractedValues));

            // Here you can add your comparison logic
            // For example, compare extractedValues with the array of CSV data
        });

    });
});
