const { defineConfig } = require("cypress");
const csv = require('csv-parser');
const fs = require('fs');

module.exports = defineConfig({
  projectId: "k2mbs8",
  // ...rest of the Cypress project config
  e2e: {
    setupNodeEvents(on, config, browser) {
      on('task', {
        readCSVFile(filePath, jsonFilePath) {
          return new Promise((resolve, reject) => {
            const jsonArray = [];
            fs.createReadStream(filePath)
              .pipe(csv())
              .on('data', (data) => jsonArray.push(data))
              .on('end', () => {
                fs.writeFile(jsonFilePath, JSON.stringify(jsonArray, null, 2), (err) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve();
                  }
                });
              });
          });
        },
      });
    },
  },
});
