const fs = require('fs');

const defaultFile = "./default.txt"
const devFile = "./test.txt"

async function writeToFile() {
    const defaultData = await readFile(defaultFile);
    const devData = await readFile(devFile);
    console.log(defaultData);
    defaultData.replace("!@#$%^&*()", devData);
    console.log(defaultData);
}

async function readFile(path) {
    console.log(path);
    fs.readFile('./default.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error:', err);
          return;
        }
        // Process the text data
        return data;
    });
}


writeToFile()