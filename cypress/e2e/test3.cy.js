describe("Test functions", () => {

    it("test file", () => {

        var extractedValues = [];
        var whatINeedJSON = [
            "data.fundo_function_get_intermediary_report[0].first_name",
            "data.fundo_function_get_intermediary_report[0].last_name",
            "data.fundo_function_get_intermediary_report[0].date_of_birth",
            "data.fundo_function_get_intermediary_report[0].gender",
            "data.fundo_function_get_intermediary_report[0].address_1",
            "data.fundo_function_get_intermediary_report[0].address_2",
            "data.fundo_function_get_intermediary_report[0].address_zip_code",
            "data.fundo_function_get_intermediary_report[0].worker_company_details",
            "data.fundo_function_get_intermediary_report[0].start_date",
            "data.fundo_function_get_intermediary_report[0].end_date",
            "data.fundo_function_get_intermediary_report[0].total_amount",
            "data.fundo_function_get_intermediary_report[0].alpha_code",
            "data.fundo_function_get_intermediary_report[0].vat",
            "data.fundo_function_get_intermediary_report[0].name",
            "data.fundo_function_get_intermediary_report[0].payment_address_line_1",
            "data.fundo_function_get_intermediary_report[0].payment_address_line_2",
            "data.fundo_function_get_intermediary_report[0].payment_address_zip_code",
            "data.fundo_function_get_intermediary_report[0].brn"
        ];

        cy.log(whatINeedJSON.length)
        cy.readFile("cypress/fixtures/intermediartJsonResponce.json").then((resData) => {

            var num_contractors_json = resData.data.fundo_function_get_intermediary_report.length;
            cy.log("Number of contractors are received in the response: ", num_contractors_json);

            for (let index = 0; index < num_contractors_json; index++) {
                extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].first_name),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].last_name),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].date_of_birth),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].gender),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].address_1),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].address_2),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].address_zip_code),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].worker_company_details),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].start_date),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].end_date),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].total_amount),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].alpha_code),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].vat),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].name),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].payment_address_line_1),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].payment_address_line_2),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].payment_address_zip_code),
                    extractedValues.push(resData.data.fundo_function_get_intermediary_report[index].brn)
            }

            cy.log(extractedValues);
            // Here you can add your comparison logic
            // For example, compare extractedValues with the array of CSV data
        });

    });
});
