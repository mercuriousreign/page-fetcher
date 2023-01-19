const request = require('request');
const fs = require('fs'); 
const site = process.argv[2];
const filePath = process.argv[3];

request(site, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.log("error");
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
  })
});