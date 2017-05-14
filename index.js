
// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');

// Instantiates a client
const speechClient = Speech({
    keyFilename: './config/googlekeyfile.json'
});

var fileName = "https://api.twilio.com/2008-08-01/Accounts/ACbebf3b569314a14fe10fd41df46055f4/Recordings/RE055a6fe940151fa884793475d2905eac";
var options = {
    encoding: "LINEAR16",
    languageCode: 'en-US'
}

speechClient.recognize(fileName, options)
    .then((results) => {
        const transcription = results[0];
        console.log(`Transcription: ${transcription}`);
    })
    .catch((err) => {
        console.error('ERROR:', err);
    });