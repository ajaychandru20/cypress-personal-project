describe("Test functions", () => {

    it("test file", () => {

        var extractedValues = [];
        var whatINeedJSON = [
            "data.user_details[0].first_name",
            "data.user_details[0].last_name",
            "data.user_details[0].date_of_birth",
            "data.user_details[0].gender",
            "data.user_details[0].address_1",
            "data.user_details[0].address_2",
            "data.user_details[0].address_zip_code"
        ];

        cy.log(whatINeedJSON.length)
        cy.readFile("cypress/fixtures/jsonVerifyData.json").then((resData) => {

            var num_contractors_json = resData.data.user_details.length;
            cy.log("Number of contractors are received in the response: ", num_contractors_json);

            for (let index = 0; index < num_contractors_json; index++) {
                extractedValues.push(resData.data.user_details[index].first_name),
                    extractedValues.push(resData.data.user_details[index].last_name),
                    extractedValues.push(resData.data.user_details[index].date_of_birth),
                    extractedValues.push(resData.data.user_details[index].gender),
                    extractedValues.push(resData.data.user_details[index].address_1),
                    extractedValues.push(resData.data.user_details[index].address_2),
                    extractedValues.push(resData.data.user_details[index].address_zip_code)
            }

            cy.log(extractedValues);
            // Here you can add your comparison logic
            // For example, compare extractedValues with the array of CSV data
        });

    });
});
