const fs = require('fs');

fs.readFile('./default.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  // Process the text data
  console.log(data);
});