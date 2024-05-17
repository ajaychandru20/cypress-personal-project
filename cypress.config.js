const { defineConfig } = require("cypress");
const csvFs = require('csv-parser');
const fs = require('fs');
const csv = require('@fast-csv/parse');
// const readXlsx = require("./cypress/plugins/read-xlsx");

module.exports = defineConfig({
  projectId: "k2mbs8",
  // ...rest of the Cypress project config
  e2e: {
    setupNodeEvents(on, config, browser) {
      on('task', {
        readCSVFile({ filePath, jsonFilePath, headers }) {
          return new Promise((resolve, reject) => {
            const jsonArray = [];
            // Create a read stream for the CSV file
            fs.createReadStream(filePath)
              .pipe(csvFs({headers}))
              .on('data', (data) => {
                jsonArray.push(data); // Push each row into the jsonArray
              })
              .on('end', () => {
                // Write the JSON array to the specified file path
                fs.writeFile(jsonFilePath, JSON.stringify(jsonArray, null, 2), (err) => {
                  if (err) {
                    reject(err); // Reject the promise if there's an error writing the file
                  } else {
                    resolve(null); // Resolve the promise if writing is successful
                  }
                });
              })
              .on('error', (err) => {
                reject(err); // Reject the promise if there's an error reading the file
              });
          });
        },
      });
      //akash approch
      // on("task", {
      //   readXlsx: readXlsx.read,
      // });
      on("task", {
        readFromCsv({ path, headers }) {
          return new Promise(resolve => {
            let dataArray = [];
            csv.parseFile(`cypress/${path}`, { headers })
              .on('data', (data) => {
                dataArray.push(data);
              })
              .on('end', () => {
                resolve(dataArray);
              });
          });
        }
      });
    },
  },
});
