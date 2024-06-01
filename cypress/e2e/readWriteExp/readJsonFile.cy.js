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
            "data.user_details[0].address_zip_code",
            "data.user_details[0].worker_company_details",
            "data.user_details[0].start_date",
            "data.user_details[0].end_date",
            "data.user_details[0].total_amount",
            "data.user_details[0].alpha_code",
            "data.user_details[0].vat",
            "data.user_details[0].name",
            "data.user_details[0].payment_address_line_1",
            "data.user_details[0].payment_address_line_2",
            "data.user_details[0].payment_address_zip_code",
            "data.user_details[0].brn"
        ];

        cy.log(whatINeedJSON.length)
        cy.readFile("cypress/fixtures/intermediartJsonResponce.json").then((resData) => {

            var num_contractors_json = resData.data.user_details.length;
            cy.log("Number of contractors are received in the response: ", num_contractors_json);

            for (let index = 0; index < num_contractors_json; index++) {
                extractedValues.push(resData.data.user_details[index].first_name),
                    extractedValues.push(resData.data.user_details[index].last_name),
                    extractedValues.push(resData.data.user_details[index].date_of_birth),
                    extractedValues.push(resData.data.user_details[index].gender),
                    extractedValues.push(resData.data.user_details[index].address_1),
                    extractedValues.push(resData.data.user_details[index].address_2),
                    extractedValues.push(resData.data.user_details[index].address_zip_code),
                    extractedValues.push(resData.data.user_details[index].worker_company_details),
                    extractedValues.push(resData.data.user_details[index].start_date),
                    extractedValues.push(resData.data.user_details[index].end_date),
                    extractedValues.push(resData.data.user_details[index].total_amount),
                    extractedValues.push(resData.data.user_details[index].alpha_code),
                    extractedValues.push(resData.data.user_details[index].vat),
                    extractedValues.push(resData.data.user_details[index].name),
                    extractedValues.push(resData.data.user_details[index].payment_address_line_1),
                    extractedValues.push(resData.data.user_details[index].payment_address_line_2),
                    extractedValues.push(resData.data.user_details[index].payment_address_zip_code),
                    extractedValues.push(resData.data.user_details[index].brn)
            }

            cy.log(extractedValues);
            // Here you can add your comparison logic
            // For example, compare extractedValues with the array of CSV data
        });

    });
});
