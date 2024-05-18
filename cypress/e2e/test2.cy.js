describe("Test functions", () => {

    it("test file", () => {

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

        cy.readFile("cypress/fixtures/intermediartJsonResponce.json").then((resData) => {
            var extractedValues = [];

            whatINeedJSON.forEach(path => {
                var value = resData;
                var pathParts = path.split(/[\.\[\]]/).filter(Boolean);

                pathParts.forEach(part => {
                    value = value[part];
                });

                extractedValues.push(value);
            });

            cy.log(JSON.stringify(extractedValues));

            // Here you can add your comparison logic
            // For example, compare extractedValues with the array of CSV data
        });

    });
});
