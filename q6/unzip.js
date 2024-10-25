
const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');

async function extractZip(zipFilePath, outputFolder) {
    fs.createReadStream(zipFilePath)
        .pipe(unzipper.Extract({ path: outputFolder }))
        .on('close', () => {
            console.log(`Extraction completed: ${outputFolder}`);
        })
        .on('error', (err) => {
            console.error("Error during extraction:", err);
        });
}

const zipFilePath = path.join(__dirname, 'your-file.zip'); 
const outputFolder = path.join(__dirname, 'extracted-folder');

extractZip(zipFilePath, outputFolder);
